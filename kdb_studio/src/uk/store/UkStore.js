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
    name: '',
    des: '',
  };

  // 서버에서 받아온 질문 리스트를 담을 배열
  @observable
  _questions = [];

  // 현재 입력 되고 있는 질문
  @observable
  _question = '';

  @computed
  get uks() {
    return toJS(this._uks);
  }

  @computed
  get target() {
    return toJS(this._target);
  }

  @computed
  get questions() {
    return toJS(this._questions);
  }

  @computed
  get question() {
    return this._question;
  }

  @action
  clear() {
    this._target = {
      name: '',
      des: '',
    };
  }

  @action
  funcTargetOnChange(key, value) {
    this._target = {
      ...this._target,
      [key]: value,
    };
  }

  @action
  funcQuestionChange(question) {
    this._question = question;
  }

  @action
  funcAddQuestion(question) {
    this._questions.push(question);
    this._question = '';
  }

  @action
  funcRemoveQuestion(id) {
    let index = this._questions.findIndex(question => question.id === id);
    if (index > -1) {
      this._questions.splice(index, 1);
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
