import React from 'react';
import ExList from '../view/ExList';
import { Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../../IDGenerator';
import { action } from 'mobx';

@inject('exStore')
@observer
@autobind
class ExListContainer extends React.Component {
  componentDidMount() {
    this.props.exStore.funcGet();
  }

  funcSelected = item => {
    this.props.exStore.funcSelected(item);
  };

  @action
  funcAddChildUk = id => {
    let { target } = this.props.exStore;
    target = {
      parentId: id,
      id: generateId(5),
      name: 'untitled',
      des: 'des',
    };
    this.props.exStore.funcAddChildUk(target);
  };

  funcRemoveUk = id => {
    this.props.exStore.funcRemoveUk(id);
  };

  @action
  TreeToArray = node => {
    let array = [];
    let recursivefunc = node => {
      array.push(node.id);
      if (Array.isArray(node.children)) {
        node.children.map(node => recursivefunc(node));
      }
    };
    recursivefunc(node);
    console.log(array);
    return array;
  };

  render() {
    const { data, target } = this.props.exStore;

    return (
      <Box sx={{ height: '95%', overflow: 'auto' }}>
        {data.map(object => (
          <ExList
            target={target}
            key={object.id}
            data={object}
            expandData={this.TreeToArray(object)}
            funcSelected={this.funcSelected}
            funcAddChildUk={this.funcAddChildUk}
            funcRemoveUk={this.funcRemoveUk}
          ></ExList>
        ))}
      </Box>
    );
  }
}

export default ExListContainer;
