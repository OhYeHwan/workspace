import React, { Component } from 'react';
import UKeditor from './UKeditor';
import { inject, observer } from 'mobx-react';
import autobind from "autobind-decorator";
import generateId from "../../IDGenerator";

@inject("ukStore")
@observer
@autobind
class UKeditorContainer extends Component {

    onSetUKProps(name, value) {
        this.props.ukStore.setUKProps(name, value);
    }

    onAddQuestion() {
        let { question } = this.props.ukStore;
        let Q = {
            id: generateId(5),
            q : question
        }
        this.props.ukStore.addQuestion(Q);
    }

    onRemoveQuestion(id) {
        this.props.ukStore.removeQuestion(id);
    }

    onhandleCreateUK = (data) => {
        this.props.ukStore.handleCreateUK(data);
    };


    onhandleKeyPress = (event) => {
        let { question } = this.props.ukStore;
        let Q = {
            id: generateId(5),
            q : question
        }
        this.props.ukStore.handleKeyPress(event, Q);
    }

    onChangeQuestion(question) {
        this.props.ukStore.setQuestion(question);
    }

    render() {
        const { ukStore } = this.props;
        return (
            <UKeditor
                uk={ukStore.uk}
                question={ukStore.question}
                questions={ukStore.questions}
                onSetUKProps={this.onSetUKProps}
                onChangeQuestion={this.onChangeQuestion}
                onCreateUK={this.onhandleCreateUK}
                onAddQuestion={this.onAddQuestion}
                onKeyPress={this.onhandleKeyPress}
                onRemoveQuestion={this.onRemoveQuestion}
            />
        );
    }
}

export default UKeditorContainer;