import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class EkdbModel {
  // Property와 값을 target object에 합쳐준다.
  // 관찰 가능한 Property로 만들어 추가해준다.
  // 렌더링 대상이 되는 값으로 만들어 추가해준다.
  constructor(ekdb) {
    extendObservable(this, ekdb);
  }

  // 1. ekdbs가 비어있는 경우 그대로 빈 배열 리턴
  // 2. ekdbs가 비어있지 않을 경우 각 원소를 EkdbModel로 감싸서 리턴
  static fromApiModels(ekdbs) {
    // if (!Array.isArray(ekdbs)) {
    if (ekdbs.length === 0) {
      return [];
    }
    return ekdbs.map(ekdb => EkdbModel.fromApiModel(ekdb));
  }

  // BE에서 받아온 데이터를
  // EkdbStore에 있는 데이터 형식으로 최적화
  // key : value 재설정
  static fromApiModel(ekdb) {
    return new EkdbModel({
      id: ekdb.DB_ID,
      name: ekdb.EKDB_NAME,
      des: ekdb.EKDB_DES,
    });
  }
}

export default EkdbModel;
