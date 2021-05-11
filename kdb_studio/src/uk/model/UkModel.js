import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class UkModel {
  constructor(uk) {
    extendObservable(this, uk);
  }
}

export default UkModel;
