import { observable, action, makeObservable, toJS } from "mobx";
import axios from "axios";

class UKStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _uk = {
        name: "ex",
        description: "ex",
        uri: "ex",
        question: "ex",
    };
    
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
    handleCreateUK = (data) => {
        console.log("Container handleCreate 실행");
        console.log(toJS(data));

        axios.post("", {
            name: data.name,
            description: data.description,
            uri: data.uri,
            question: data.question,
        })
        .then(function (response) {
            alert("로직 작성");
        })
        .catch(function (error) {
            alert("Container handleCreate 에러발생")
        });

        this._uk = {
            name: "",
            description: "",
            uri: "",
            question: "",
        }
    };

}

export default new UKStore();