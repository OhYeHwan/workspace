import { observable, makeObservable, action, computed, toJS } from 'mobx';
import generateId from '../../IDGenerator';

class ExStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _target = {
    root: null,
    parent: null,
    id: null,
    name: '',
    children: [],
  };

  @computed
  get target() {
    return toJS(this._target);
  }

  @action
  funcSelected(target) {
    this._target = target;
  }

  @observable
  beforeData = [
    {
      parentId: 'root',
      id: 'root',
    },
    {
      parentId: 'root',
      id: '1',
      name: '1',
    },
    {
      parentId: '1',
      id: '2',
      name: '2',
    },
    {
      parentId: '1',
      id: '3',
      name: '3',
    },
    {
      parentId: '1',
      id: '4',
      name: '4',
    },
    {
      parentId: '2',
      id: '5',
      name: '5',
    },
    {
      parentId: '2',
      id: '6',
      name: '6',
    },
    {
      parentId: '1',
      id: '10',
      name: '10',
    },
    {
      parentId: 'root',
      id: '21',
      name: '21',
    },
    {
      parentId: '21',
      id: '22',
      name: '22',
    },
  ];

  @action
  funcTreeModel(arrayList, rootId) {
    let rootNodes = [];

    let traverse = function (nodes, item, index) {
      if (nodes instanceof Array) {
        return nodes.some(function (node) {
          if (node.id === item.parentId) {
            node.children = node.children || [];
            return node.children.push(arrayList.splice(index, 1)[0]);
          }
          return traverse(node.children, item, index);
        });
      }
    };

    while (arrayList.length > 0) {
      arrayList.some(function (item, index) {
        if (item.parentId === rootId) {
          return rootNodes.push(arrayList.splice(index, 1)[0]);
        }
        return traverse(rootNodes, item, index);
      });
    }
    return rootNodes;
  }

  @action
  funcBokje() {
    let dataBokje = [...this.beforeData];
    console.log(dataBokje);
    let afterData = this.funcTreeModel(dataBokje, 'root');
    let data = afterData.filter(i => i.id !== 'root');
    return data;
  }

  @observable
  _data = [];

  @computed
  get data() {
    return toJS(this._data);
  }

  @action
  funcAddRootUk() {
    let tmp = generateId(5);
    let object = {
      parentId: 'root',
      id: tmp,
      name: tmp,
    };
    this.beforeData.push(object);
    console.log(toJS(this.beforeData));
  }

  @action
  funcAddChildUk() {
    this.funcChangeTarget();
  }

  //   @action
  //   funcFindeIndex() {
  //     // 선택한 uk의 children을 추가한 target 생성
  //     this.funcChangeTarget();

  //     // 1 디렉토리에 추가할 경우
  //     let findindex = this._data.findIndex(i => i.id === this._target.id);
  //     this._data.splice(findindex, 1, this._target);

  //     // 2 디렉토리에 추가할때
  //     let rootIndex = this._data.findIndex(i => i.id === this._target.parent);
  //     let obj = this._data.find(i => i.id === this._target.parent);

  //     let findindex2 = obj.children.findIndex(i => i.id === this._target.id);
  //     obj.children.splice(findindex2, 1, this._target);

  //     this._data.splice(rootIndex, 1, obj);

  //     // 3 디렉토리에 추가할때
  //     let rootIndex2 = this._data.findIndex(i => i.id === this._tareget.root);
  //     let obj2 = this._data.find(i => i.id === this._target.root);
  //     let obj3 = obj2.children.find(i => i.id === this._target.parent);

  //     let findindex3 = obj2.children.map(i => i.id === this._target.parent);
  //     let findindex4 = obj3.children.findIndex(i => i.id === this._target.id);
  //     obj3.children.splice(findindex4, 1, this._target);
  //     obj2.children.splice(findindex3, 1, obj3);
  //     this._data.splice(rootIndex2, 1, obj2);
  //     // 4 디렉토리 추가할때
  //     // 현재 선택한 아이템의 루트가 일치할때 인덱스 저장
  //   }

  @action
  funcChangeTarget() {
    let tmp = generateId(5);
    let child = {
      id: tmp,
      name: tmp,
    };

    const haveChildren = 'children' in this._target;

    if (haveChildren === true) {
      this._target = {
        ...this._target,
        ...this._target.children.push(child),
      };
    } else {
      this._target = {
        ...this._target,
        children: [child],
      };
    }
    console.log(toJS(this._target));

    let ff = this._data.findIndex(i => i.id === this._target.id);

    this._data.splice(ff, 1, this._target);
  }
}

export default new ExStore();
