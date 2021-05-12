import { observable, action, makeObservable, toJS, computed } from 'mobx';

class UkStore {
  constructor() {
    makeObservable(this);
  }

  // 서버에서 받아온 uk 리스트를 담을 배열
  @observable
  _uks = [];

  // 현재 입력 되고 있는 정보를 담을 오브젝트
  @observable
  _target = {
    id: null,
    name: '',
    des: '',
    question: '',
    questions: [],
  };

  @computed
  get uks() {
    return toJS(this._uks);
  }

  @computed
  get target() {
    return toJS(this._target);
  }

  @action
  clear() {
    this._target = {
      id: null,
      name: '',
      des: '',
      question: '',
      questions: [],
    };
  }

  //  **** UK 관련 함수 ****

  @action
  funcTargetOnChange(key, value) {
    this._target = {
      ...this._target,
      [key]: value,
    };
  }

  @action
  funcSelectedUk(target) {
    this._target = target;
  }

  @action
  funcAddUk(target) {
    this._uks.push(target);
    this.funcSelectedUk(target);
  }

  @action
  funcUpdateUk() {
    let foundUk = this._uks.find(uk => uk.id === this._target.id); // find 주어진 조건을 만족하는 첫번째 요소 값을 반환 else undefined
    foundUk.name = this._target.name;
    foundUk.des = this._target.des;
    foundUk.questions = this.target.questions;
  }

  @action
  funcRemoveUk(id) {
    let index = this._uks.findIndex(uk => uk.id === id);
    if (index > -1) {
      this._uks.splice(index, 1);
    }
    this.clear();
  }

  // **** Question 관련 함수 ****
  @action
  funcAddQuestion(question) {
    this._target.questions.push(question);
    this._target.question = '';
  }

  @action
  funcRemoveQuestion(id) {
    let index = this._target.questions.findIndex(
      question => question.id === id,
    );
    if (index > -1) {
      this._target.questions.splice(index, 1);
    }
  }

  @action
  funcKeyPress(event, question) {
    if (event.key === 'Enter') {
      this.funcAddQuestion(question);
    }
  }
}

export default new UkStore();
