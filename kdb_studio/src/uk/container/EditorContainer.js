import React from 'react';
import Editor from '../view/Editor';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../../IDGenerator';
import { action } from 'mobx';

@inject('ukStore')
@observer
@autobind
class EditorContainer extends React.Component {
  @action
  funcTargetOnChange = (key, value) => {
    this.props.ukStore.funcTargetOnChange(key, value);
  };

  @action
  funcAddQuestion = () => {
    let { question } = this.props.ukStore;
    let Q = {
      id: generateId(5),
      q: question,
    };
    this.props.ukStore.funcAddQuestion(Q);
  };

  @action
  funcRemoveQuestion = id => {
    this.props.ukStore.funcRemoveQuestion(id);
  };

  @action
  funcKeyPress = event => {
    let { question } = this.props.ukStore;
    let Q = {
      id: generateId(5),
      q: question,
    };
    this.props.ukStore.funcKeyPress(event, Q);
  };

  @action
  funcQuestionChange = question => {
    this.props.ukStore.funcQuestionChange(question);
  };

  render() {
    const { target, question, questions } = this.props.ukStore;
    return (
      <Editor
        target={target}
        question={question}
        questions={questions}
        funcTargetOnChange={this.funcTargetOnChange}
        funcAddQuestion={this.funcAddQuestion}
        funcRemoveQuestion={this.funcRemoveQuestion}
        funcKeyPress={this.funcKeyPress}
        funcQuestionChange={this.funcQuestionChange}
      />
    );
  }
}

export default EditorContainer;
