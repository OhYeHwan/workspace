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
  funcOnChange = (id, value) => {
    this.props.ekdbStore.funcOnChange(id, value);
  };

  @action
  funcSearchEkdb = searchEkdb => {
    this.props.ekdbStore.funcSearchEkdb(searchEkdb);
  };

  render() {
    const { action, ekdbs, target } = this.props.ekdbStore;
    return (
      <Toolbar
        funcInsert={this.funcInsert}
        funcOnChange={this.funcOnChange}
        funcSearchEkdb={this.funcSearchEkdb}
        action={action}
        ekdbs={ekdbs}
        target={target}
      />
    );
  }
}

export default ToolbarContainer;
