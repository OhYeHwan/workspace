import { observable, action, makeObservable, toJS, computed } from "mobx";
import axios from "axios";

class EKDBStore {
    constructor() {
        makeObservable(this);
    }

    // 현재 입력된 ekdb 정보
    @observable
    _ekdb = {
        title: "",
        description: "",
    };

    // ekdb 접근 get함수
    get ekdb() {
        return this._ekdb;
    }

    // ekdb props 설정함수
    @action
    setEKDBProps(name, value) {
        this._ekdb = {
            ...this._ekdb,
            [name]: value,
        };
    }

    //ekdb 리스트를 저장할 배열
    @observable
    _ekdbs = []; // EKDB_NAME , EKDB_DES

    @computed
    get ekdbs() {
        return toJS(this._ekdbs);
    }

    // ekdbs 배열 값 설정 함수
    @action
    setEKDBs(ekdbs) {
        this._ekdbs = [...ekdbs];
    }

    @action
    handleCreateEKDB = (ekdb) => {
        console.log("EKDBStore handleCreate 실행");
        axios.post("http://192.168.156.18:3009/EKDB", {
            EKDB_NAME: ekdb.title,
            EKDB_DES: ekdb.description,
        })
        .then((response) => {
            console.log(response)
            this.getEKDBs();
        })
        .catch((error) => console.log(error))
    };

    @action
    getEKDBs() {
        axios.get('http://192.168.156.18:3009/EKDB')
            .then(response => {
                console.log(response.data);
                this.setEKDBs(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

};

export default new EKDBStore();