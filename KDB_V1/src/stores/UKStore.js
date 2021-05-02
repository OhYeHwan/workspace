import { observable, action, makeObservable } from "mobx";

class UKStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _uk = {
        name: "ex",
        description: "",
        url: "",
        question: "",
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

}

export default new UKStore();