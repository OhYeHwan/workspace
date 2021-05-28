import { observable, makeObservable, action, computed, toJS } from 'mobx';
import generateId from '../../IDGenerator';

class ExStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _mode = false;

  get mode() {
    return this._mode;
  }

  @observable
  _target = {
    parentId: null,
    id: null,
    name: '',
    des: '',
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

  _beforeData = [];

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
  }

  @observable
  _data = [];

  @computed
  get data() {
    return toJS(this._data);
  }

  @action
  funcAddRootUk() {
    this._mode = true;
    let tmp = generateId(5);
    let object = {
      parentId: 'root',
      id: tmp,
      name: 'undefinded',
      des: 'undefinded',
    };
    this._beforeData.push(object);
    this.funcSelected(object);
    this.funcGet();
  }

  @action
  funcAddChildUk(target) {
    this._beforeData.push(target);
    this.funcSelected(target);
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

  // UK Editor 관련함수
  @action
  funcTargetOnChange(key, value) {
    this._target = {
      ...this._target,
      [key]: value,
    };
  }

  @action
  funcUpdateUk() {
    let foundUk = this._beforeData.find(uk => uk.id === this._target.id);
    foundUk.name = this._target.name;
    foundUk.des = this._target.des;
  }
}
export default new ExStore();
