import { observable, makeObservable, action, computed, toJS } from 'mobx';
import generateId from '../../IDGenerator';

class ExStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _target = {
    parentId: null,
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
  _dupData = [];

  @computed
  get dupData() {
    return toJS(this._dupData);
  }

  _beforeData = [
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

    let traverse = (nodes, item, index) => {
      if (nodes instanceof Array) {
        return nodes.some(node => {
          if (node.id === item.parentId) {
            node.children = node.children || [];
            return node.children.push(arrayList.splice(index, 1)[0]);
          }
          return traverse(node.children, item, index);
        });
      }
    };

    while (arrayList.length > 0) {
      arrayList.some((item, index) => {
        if (item.parentId === rootId) {
          return rootNodes.push(arrayList.splice(index, 1)[0]);
        }
        return traverse(rootNodes, item, index);
      });
    }
    return rootNodes;
  }

  @action
  funcGet() {
    this._dupData = [...this._beforeData];
    this._data = this.funcTreeModel(this._dupData, 'root');
    console.log(this.data);
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
    this._beforeData.push(object);
    this.funcGet();
  }

  @action
  funcAddChildUk() {
    let tmp = generateId(5);
    let object = {
      parentId: this._target.id,
      id: tmp,
      name: tmp,
    };
    this._beforeData.push(object);
    this.funcGet();
  }

  @action
  funcRemoveUk(id) {
    let removeList = this.dfs(id);

    while (removeList.length !== 0) {
      let node = removeList.pop();
      for (let i = 0; i < this._beforeData.length; i++) {
        if (this._beforeData[i] === node) {
          this._beforeData.splice(i, 1);
          i--;
        }
      }
    }
    this.funcGet();
  }

  @action
  dfs(startId) {
    // 탐색해야할 노드
    let needVisitStack = [];
    // 탐색을 마친 노드
    let visitedQueue = [];

    let foundIndex = this._beforeData.findIndex(i => i.id === startId);
    needVisitStack.push(this._beforeData[foundIndex]);

    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();
      if (!visitedQueue.includes(node)) {
        visitedQueue.push(node);
        let arrayList = this._beforeData.filter(i => i.parentId === node.id);
        needVisitStack = [...needVisitStack, ...arrayList];
      }
    }

    return visitedQueue;
  }
}
export default new ExStore();
