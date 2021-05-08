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

  // 현재입력되는 정보
  @observable
  _target = {
    name: '',
    des: '',
  };

  @observable
  _searchEkdb = '';

  // observable이 적용된 변수들은
  // 몹엑스 스토어가 관리하는 데이터,
  // 객체 형태로 랩핑이 된다.

  // 실제 자바스크립트 객체로 변경을 원할시에
  // get ekdbs() {
  //   return this._ekdbs ? this.ekdbs.slice() : [];
  // }
  // [Proxy], [Proxy], [Proxy] ...
  //

  // 따라서 toJS를 사용해야함
  // observable 형태로 관리되어지는 객체를
  // 자바스크립트 객체로 변환해준다.
  // computed : observable 데이터의 변경이 일어나지 않으면
  // 최종으로 캐싱하고 있는 데이터를 리턴해준다.
  @computed
  get ekdbs() {
    return toJS(this._ekdbs);
  }

  // _target 접근 함수
  // 외부에서 target 으로 접근
  @computed
  get target() {
    return toJS(this._target);
  }

  // _searchEkdb 접근함수
  @computed
  get searchEkdb() {
    return this._searchEkdb;
  }

  // _target 초기화 함수
  // 로직처리 후 Dialog 초기화
  @action
  clear() {
    this._target = {
      name: '',
      des: '',
    };
  }

  // 서버에서 데이터 가져오는 함수
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

  // 서버에 데이터 삽입
  // 현재 입력되어있는 정보 (_target)을
  // Repository의 Restful Api를 이용하여 서버에 전송
  // id를 줘야한다면 여기서 줘야될듯
  @action
  funcInsert() {
    const data = {
      EKDB_NAME: this._target.name,
      EKDB_DES: this._target.des,
    };
    EkdbRepository.funcInsert(data)
      .then(
        action(response => {
          if (response.status === 201) {
            alert('생성 성공');
            this.funcGet();
            this.clear();
          } else if (response.status === 400) {
            alert('잘못된 입력');
          }
        }),
      )
      .catch(e => alert(e));
  }

  // 서버에 데이터 업데이트
  @action
  funcUpdate() {
    const data = {
      EKDB_DES: this._target.des,
    };

    EkdbRepository.funcUpdate(this._target.name, data)
      .then(
        action(response => {
          if (response.status === 201) {
            alert('업데이트 성공!');
            this.funcGet();
            this.clear();
          } else if (response.status === 400) {
            alert('입력 오류');
          }
        }),
      )
      .catch(e => {
        alert(e);
      });
  }

  // 서버에 데이터 삭제 요청
  @action
  funcDel() {
    EkdbRepository.funcDel(this._target.name)
      .then(
        action(response => {
          if (response.status === 204) {
            alert('삭제 성공!');
            this.funcGet();
          } else if (response.status === 400) {
            alert('잘못된 name 입니다');
          }
        }),
      )
      .catch(e => {
        alert(e);
      });
  }

  // 이벤트가 발생할 때 마다
  // _target의 정보를 변경
  // 기존에 가지고 있는 _target 값을 복사한 뒤에
  // 입력된 값을 변경
  @action
  funcOnChange(key, value) {
    this._target = {
      ...this._target,
      [key]: value,
    };
  }

  // searchText를 변경해주는 method
  @action
  funcSearchEkdb(searchEkdb) {
    this._searchEkdb = searchEkdb;
  }
}

export default new EkdbStore();

// To Do
// 1. response.status에 따라서 로직설정
// 2. api 설계 문서 확인하고 변수 재설정
// 3. 실험
// 4. 주석 작성
// 5. UK 페이지 관련 Mobx 구조 설계
