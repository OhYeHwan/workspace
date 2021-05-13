import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class UkModel {
  // Property와 값을 target object에 합쳐준다.
  // 관찰 가능한 Property로 만들어 추가해준다.
  // 렌더링 대상이 되는 값으로 만들어 추가해준다.
  constructor(uk) {
    extendObservable(this, uk);
  }

  // 1. uks가 비어있는 경우 그대로 빈 배열 리턴
  // 2. uks가 비어있지 않을 경우 각 원소를 UkModel로 감싸서 리턴
  static fromApiModels(uks) {
    // if (!Array.isArray(uks)) {
    if (uks.length === 0) {
      return [];
    }
    return uks.map(uk => UkModel.fromApiModel(uk));
  }

  // BE에서 받아온 데이터를
  // UkStore에 있는 데이터 형식으로 최적화
  // key : value 재설정
  static fromApiModel(uk) {
    return new UkModel({
      id: uk.ID,
      name: uk.UK_NAME,
      des: uk.DESCRIPTION,
    });
  }
}

export default UkModel;
