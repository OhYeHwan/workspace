import { observable, action, computed, makeObservable, toJS } from 'mobx';
import EkdbRepository from '../repository/EkdbRepository';

class EkdbStore {
  // 데코레이터기법을 사용하기 위해서
  // makeObservable 선언
  constructor() {
    makeObservable(this);
  }

  // 관찰 되어질
  // ekdb 목록 배열
  @observable
  _ekdbs = [];

  @observable
  _action = '';

  // 현재입력되는 정보
  @observable
  _target = {
    id: '',
    name: '',
    des: '',
  };

  //toJS사용이유
  @computed
  get ekdbs() {
    return toJS(this._ekdbs);
  }

  @computed
  get action() {
    return toJS(this._action);
  }

  @computed
  get target() {
    return toJS(this._target);
  }

  @action
  clear() {
    this._ekdbs = [];
    this._action = '';
    this.target = {
      id: '',
      name: '',
      des: '',
    };
  }

  @action
  funcGet() {
    EkdbRepository.funcGet()
      .then(
        action(response => {
          console.log(response);
          console.log(JSON.stringify(response));
          this._ekdbs = toJS(response);
          console.log(this._ekdbs);
          return this._ekdbs;
        }),
      )
      .catch(e => {
        alert(e);
      });
  }

  @action
  funcInsert() {
    EkdbRepository.funcInsert(this._target)
      .then(
        action(response => {
          console.log(JSON.stringify(response));
          alert('insert success!');
          this._funcGet();
        }),
      )
      .catch(e => alert(e));
  }

  @action
  funcUpdate() {
    EkdbRepository.funcUpdate(this._target.name, this._target.des)
      .then(
        action(response => {
          console.log(JSON.stringify(response));
          alert('update success!');
          this.funcGet();
        }),
      )
      .catch(e => {
        alert(e);
      });
  }

  @action
  funcDel() {
    EkdbRepository.funcDel(this._target.name)
      .then(
        action(response => {
          console.log(JSON.stringify(response));
          alert('delete success!');
          this.funcGet();
        }),
      )
      .catch(e => {
        alert(e);
      });
  }

  @action
  funcOnChange(id, value) {
    this._target = {
      ...this._target,
      [id]: value,
    };
  }

  @action
  funcDoAction(order) {
    this._clear();
    this._action = order;
    if (action === 'search' || action === 'delete' || action === 'update') {
      this._funcGet();
    }
  }
}

export default new EkdbStore();
