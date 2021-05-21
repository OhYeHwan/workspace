import React from 'react';
import ExList from '../view/ExList';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('exStore')
@observer
@autobind
class ExListContainer extends React.Component {
  funcAddRootUk = () => {
    this.props.exStore.funcAddRootUk();
  };

  funcSelected = item => {
    this.props.exStore.funcSelected(item);
  };

  funcAddChildUk = () => {
    this.props.exStore.funcAddChildUk();
  };

  render() {
    const { data, target } = this.props.exStore;
    return (
      <>
        <IconButton arial-labe="Add root UK" onClick={this.funcAddRootUk}>
          <AddIcon />
        </IconButton>
        {data.map(object => (
          <ExList
            target={target}
            key={object.id}
            data={object}
            funcSelected={this.funcSelected}
            funcAddChildUk={this.funcAddChildUk}
          />
        ))}
      </>
    );
  }
}

export default ExListContainer;
