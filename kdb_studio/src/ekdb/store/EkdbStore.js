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
    this._target = {
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

  // 현재 입력되어있는 정보 (_target)을
  // Repository의 Restful Api를 이용하여 서버에 전송
  @action
  funcInsert() {
    const data = {
      EKDB_NAME: this._target.name,
      EKDB_DES: this._target.des,
    };
    EkdbRepository.funcInsert(data)
      .then(
        action(response => {
          console.log(JSON.stringify(response));
          alert('insert success!');
          this.funcGet();
          this.clear();
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

  // 이벤트가 발생할 때 마다
  // _target의 정보를 변경
  @action
  funcOnChange(key, value) {
    this._target = {
      ...this._target,
      [key]: value,
    };
  }

  // @action
  // funcDoAction(order) {
  //   this._clear();
  //   this._action = order;
  //   if (action === 'search' || action === 'delete' || action === 'update') {
  //     this._funcGet();
  //   }
  // }
}

export default new EkdbStore();
