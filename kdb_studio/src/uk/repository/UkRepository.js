import axios from 'axios';
import UkModel from '../model/UkModel';

class UkRepository {
  // 전체 UK 조회
  funcGet(DBid) {
    return axios
      .get(`http://192.168.156.18:3009/EKDB/${DBid}/UK_LIST`)
      .then(response => UkModel.fromApiModels(response.data));
  }

  // 새로운 UK 생성
  funcInsert(DBid, data) {
    return axios
      .post(`http://192.168.156.18:3009/EKDB/${DBid}`, data)
      .then(response => response);
  }

  // UK 삭제
  funcDel(DBid, name) {
    return axios
      .delete(`http://192.168.156.18:3009/EKDB/${DBid}/UK_LIST/${name}`)
      .then(response => response);
  }
}

export default new UkRepository();
