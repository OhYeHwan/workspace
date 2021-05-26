import React from 'react';
import UkEditor from '../view/UkEditor';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../../IDGenerator';
import { action } from 'mobx';

@inject('ukStore')
@observer
@autobind
class ExUkEditorContainer extends React.Component {
  @action
  funcTargetOnChange = (key, value) => {
    this.props.ukStore.funcTargetOnChange(key, value);
  };

  @action
  funcUpdateUk = () => {
    this.props.ukStore.funcUpdateUk();
  };

  @action
  funcAddQuestion = () => {
    let { target } = this.props.ukStore;
    let Q = {
      id: generateId(5),
      q: target.question,
    };
    this.props.ukStore.funcAddQuestion(Q);
  };

  @action
  funcRemoveQuestion = id => {
    this.props.ukStore.funcRemoveQuestion(id);
  };

  @action
  funcKeyPress = event => {
    let { target } = this.props.ukStore;
    let Q = {
      id: generateId(5),
      q: target.question,
    };
    this.props.ukStore.funcKeyPress(event, Q);
  };

  render() {
    const { uks, target } = this.props.ukStore;
    return (
      <UkEditor
        uks={uks}
        target={target}
        funcUpdateUk={this.funcUpdateUk}
        funcTargetOnChange={this.funcTargetOnChange}
        funcAddQuestion={this.funcAddQuestion}
        funcRemoveQuestion={this.funcRemoveQuestion}
        funcKeyPress={this.funcKeyPress}
        funcQuestionChange={this.funcQuestionChange}
      />
    );
  }
}

export default ExUkEditorContainer;
