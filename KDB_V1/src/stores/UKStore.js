import { observable, action, makeObservable, toJS, computed } from "mobx";
import axios from "axios";

class UKStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _uk = {
        name: "",
        description: "",
        uri: "",
        question: this.questions,
    };

    @observable
    _question = "";

    get question() {
        return this._question;
    }

    @observable
    _questions = [];

    @computed
    get questions() {
        return toJS(this._questions);
    }

    @action
    addQuestion(question) {
        this._questions.push(question);
        this._question = "";
        console.log(this.questions);
    }

    @action
    removeQuestion(id) {
        let index = this._questions.findIndex((question) => question.id === id);
        if (index > -1) {
            this._questions.splice(index, 1);
        }
        console.log(this.questions);
    }

    
    get uk() {
        return this._uk;
    }

    @action
    setUKProps(name, value) {
        this._uk = {
            ...this._uk,
            [name]: value,
        };
    }

    @action
    setQuestion(question) {
        this._question = question;
    }

    @action
    handleCreateUK = (data) => {
        console.log("Container handleCreate 실행");
        console.log(toJS(data));
        console.log(data.name);

        axios.post("http://192.168.155.18:4000/EKDB", {
            name: data.name,
            description: data.description,
            uri: data.uri,
            question: data.question,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this._uk = {
            name: "",
            description: "",
            uri: "",   
        }
        this._questions = []
    };

    @action
    handleKeyPress = (event,question) => {
        if (event.key === 'Enter') {
            this.addQuestion(question);
        }
    }

}

export default new UKStore();