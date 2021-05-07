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

  static fromApiModels(ekdbs) {
    // if (!Array.isArray(ekdbs)) {
    if (ekdbs.length === 0) {
      return [];
    }
    return ekdbs.map(ekdb => EkdbModel.fromApiModel(ekdb));
  }

  static fromApiModel(ekdb) {
    return new EkdbModel({
      name: ekdb.EKDB_NAME,
      des: ekdb.EKDB_DES,
    });
  }
}

export default EkdbModel;
