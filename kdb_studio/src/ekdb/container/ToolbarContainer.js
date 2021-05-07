import React from 'react';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import autobind from 'autobind-decorator';
import Toolbar from '../view/Toolbar';

@inject('ekdbStore')
@observer
@autobind
class ToolbarContainer extends React.Component {
  @action
  funcInsert = e => {
    this.props.ekdbStore.funcInsert();
  };

  @action
  funcDoAction = e => {
    let order = e.target.id;
    this.props.ekdbStore.funcDoAction(order);
    e.preventDefault();
  };

  @action
  funcOnChange = (id, value) => {
    this.props.ekdbStore.funcOnChange(id, value);
  };

  render() {
    const { action, ekdbs, target } = this.props.ekdbStore;
    return (
      <Toolbar
        funcInsert={this.funcInsert}
        funcDoAction={this.funcDoAction}
        funcOnChange={this.funcOnChange}
        action={action}
        ekdbs={ekdbs}
        target={target}
      />
    );
  }
}

export default ToolbarContainer;
