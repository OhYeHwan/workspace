import { observable, action, makeObservable, toJS, computed } from "mobx";
import axios from "axios";

class EKDBStore {
    constructor() {
        makeObservable(this);
    }

    // 현재 입력된 ekdb 정보
    @observable
    _ekdb = {
        EKDB_NAME: "",
        EKDB_DES: "",
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

    // EKDBListToolbarContainer
    @action
    handleCreateEKDB = (ekdb) => {
        console.log("EKDBStore handleCreate 실행");
        axios.post("http://192.168.156.18:3009/EKDB", {
            EKDB_NAME: ekdb.EKDB_NAME,
            EKDB_DES: ekdb.EKDB_DES,
        })
        .then((response) => {
            console.log(response)
            if (response.status === 201) {
                alert("생성완료");
                this.getEKDBs();
            } else if (response.status === 400) {
                alert("잘못된 EKDB_NAME 입니다.");
            }
        })
        .catch((error) => console.log(error))
    };

    // EKDBListContainer
    @action
    handleDeleteEKDB = (ekdb) => {
        console.log("EKDBStore handleDelete 실행");
        axios.delete(`http://192.168.156.18:3009/EKDB/${ekdb}`)
        .then(response => {
                console.log(response)
                if (response.status === 204) {
                    alert("삭제완료");
                    this.getEKDBs();
                } else if (response.status === 400) {
                    alert("잘못된 EKDB_NAME 입니다.");
                }
            })
        .catch(error => console.log(error));
    }

    @action
    handleUpdateEKDB = (ekdb) => {
        console.log("EKDBStroe handleUpdate 실행");
        console.log(ekdb);
        axios.patch(`http://192.168.156.18:3009/EKDB/${ekdb.EKDB_NAME}`, {
            EKDB_DES: ekdb.EKDB_DES
        })
        .then(response => {
            console.log(response)
            if (response.status === 201) {
                alert("수정완료");
                this.getEKDBs();
            } else if (response.stauts === 400) {
                alert("입력 오류");
            }
        })
        .catch(error => console.log(error));
    }

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