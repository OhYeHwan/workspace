import React from 'react';
import ExUkEditor from '../view/ExUkEditor';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { action } from 'mobx';

@inject('exStore')
@observer
@autobind
class ExUkEditorContainer extends React.Component {
  @action
  funcTargetOnChange = (key, value) => {
    this.props.exStore.funcTargetOnChange(key, value);
  };

  @action
  funcUpdateUk = () => {
    this.props.exStore.funcUpdateUk();
  };

  render() {
    const { mode, _beforeDate, target } = this.props.exStore;
    return mode === true ? (
      <ExUkEditor
        _beforeData={_beforeDate}
        target={target}
        funcUpdateUk={this.funcUpdateUk}
        funcTargetOnChange={this.funcTargetOnChange}
      />
    ) : null;
  }
}

export default ExUkEditorContainer;
