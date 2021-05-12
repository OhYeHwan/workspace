import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React from 'react';
import ListView from '../view/ListView';
import UkAddButton from '../view/UkAddButton';
import { Box } from '@material-ui/core';
import generateId from '../../IDGenerator';

@inject('ukStore')
@observer
@autobind
class ListViewContainer extends React.Component {
  funcSelectedUk = uk => {
    this.props.ukStore.funcSelectedUk(uk);
  };

  funcAddUk = () => {
    let { target } = this.props.ukStore;
    target = {
      id: generateId(5),
      name: 'untitled',
      des: 'des',
      questions: [],
    };
    this.props.ukStore.funcAddUk(target);
  };

  funcRemoveUk = id => {
    this.props.ukStore.funcRemoveUk(id);
  };

  render() {
    let { uks } = this.props.ukStore;
    return (
      <>
        <Box sx={{ float: 'right' }}>
          <UkAddButton funcAddUk={this.funcAddUk} />
        </Box>
        <ListView
          uks={uks}
          funcSelectedUk={this.funcSelectedUk}
          funcRemoveUk={this.funcRemoveUk}
        />
      </>
    );
  }
}

export default ListViewContainer;
