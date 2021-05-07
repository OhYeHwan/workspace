import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class EkdbModel {
  constructor(ekdb) {
    extendObservable(this, ekdb);
  }

  static fromApiModels(ekdbs) {
    if (!Array.isArray(ekdbs)) {
      return this.fromApiModel(ekdbs);
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
