import { observable, action, makeObservable } from "mobx";
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
        console.log('1');
    }

    //ekdb 리스트를 저장할 배열
    @observable
    _ekdbs = []; // EKDB_NAME , EKDB_DES

    get ekdbs() {
        return this._ekdbs;
    }

    @action
    handleCreateEKDB = (ekdb) => {
        console.log("EKDBStore handleCreate 실행");

        axios.post("http://192.168.156.18:4000/EKDB", {
            EKDB_NAME: ekdb.title,
            EKDB_DES: ekdb.description,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    
    };

    @action
    getEKDBs() {
        axios.get('http://192.168.156.18:4000/EKDB')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


};

export default new EKDBStore();