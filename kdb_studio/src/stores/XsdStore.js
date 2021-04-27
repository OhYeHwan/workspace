import { observable, action, computed, makeObservable, toJS } from "mobx";

class XsdStore {
  constructor() {
    makeObservable(this);
  }
  @observable
  _xsd = {}; // id, file_name, code

  //xsd데이터들을 담을 배열객체
  @observable
  _xsds = [
    {
      id: "1",
      file_name: "food.xsd",
      code: "dasdsads",
    },
    {
      id: "2",
      file_name: "order.xsd",
      code: '<xsd:element name="PurchaseOrder" type="tns:PurchaseOrderType"/>'
    },
    {
      id: "3",
      file_name: "customersorders.xsd",
      code: "<xs:element name='Customers'>"
    }
  ];

  @observable
  _searchText = "";

  // _xsd 에 접근 할 수 있는 get method
  get xsd() {
    return this._xsd;
  }

  // _xsds 에 접근 할 수 있는 get method
  @computed
  get xsds() {
    return toJS(this._xsds);
  }

  get searchText() {
    return this._searchText;
  }

  @action
  setXsdProps(name, value) {
    this._xsd = {
      ...this._xsd,
      [name]: value,
    };
  }

  @action
  setSearchText(searchText) {
    this._searchText = searchText;
  }

  // _xsds가 observable데이터이기때문에 action 추가
  @action
  addXsd(xsd) {
    // 중복기능 여기다 추가하면 될듯?
    this._xsds.push(xsd);
    this.selectedXsd(xsd);
  }

  @action
  selectedXsd(xsd) {
    this._xsd = xsd;
  }

  @action
  updateXsd() {
    let foundXsd = this._xsds.find((xsd) => xsd.id === this._xsd.id);
    foundXsd.file_name = this._xsd.file_name;
    foundXsd.code = this._xsd.code;
    //this._xsd = {}; 에디터창비우기
  }

  @action
  removeXsd() {
    let index = this._xsds.findIndex((xsd) => xsd.id === this._xsd.id);
    if (index > -1) {
      this._xsds.splice(index, 1);
    }
    this._xsd = {};
  }
}

export default new XsdStore();
