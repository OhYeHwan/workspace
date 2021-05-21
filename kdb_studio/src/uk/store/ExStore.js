import { observable, makeObservable, action, computed, toJS } from 'mobx';
import generateId from '../../IDGenerator';

class ExStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _target = {
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
  _data = [
    {
      id: 'root1',
      name: '티베로설치법',
      children: [
        {
          id: '1',
          name: '1',
          children: [
            {
              id: '8',
              name: '8',
            },
          ],
        },
        {
          id: '3',
          name: '3',
          children: [
            {
              id: '4',
              name: '4',
            },
          ],
        },
      ],
    },
    {
      id: 'root2',
      name: '티베로 삭제법',
      children: [
        {
          id: '5',
          name: '5',
        },
        {
          id: '6',
          name: '6',
          children: [
            {
              id: '7',
              name: '7',
            },
          ],
        },
      ],
    },
  ];

  @computed
  get data() {
    return toJS(this._data);
  }

  @action
  funcAddRootUk() {
    let tmp = generateId(5);
    let object = {
      id: tmp,
      name: tmp,
    };
    this._data.push(object);
  }

  @action
  funcAddChildUk() {
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
    console.log(this.target);
  }
}

export default new ExStore();
