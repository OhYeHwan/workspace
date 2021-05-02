import { observable, action } from "mobx";

class UKStore {

    @observable
    _uk = {
        name: "",
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