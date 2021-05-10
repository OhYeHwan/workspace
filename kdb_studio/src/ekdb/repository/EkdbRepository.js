import axios from 'axios';
import EkdbModel from '../model/EkdbModel';

// Restful API 관련 함수

class EkdbRepository {
  // 서버에서 EKDB 데이터 요청
  // Model을 통해서 데이터를 ReactJS-Mobx로 최적화
  funcGet() {
    return axios
      .get('http://192.168.156.18:3009/EKDB')
      .then(response => EkdbModel.fromApiModels(response.data));
  }

  // 서버에 EKDB 데이터 삽입 요청
  funcInsert(data) {
    return axios
      .post('http://192.168.156.18:3009/EKDB', data)
      .then(response => response);
  }

  // 서버에 EKDB 데이터 수정 요청
  funcUpdate(id, data) {
    console.log('레포지토리 data');
    console.log(data);
    return axios
      .patch(`http://192.168.156.18:3009/EKDB/${id}`, data)
      .then(response => response);
  }

  // 서버에 EKDB 데이터 삭제 요청
  funcDel(id) {
    return axios
      .delete(`http://192.168.156.18:3009/EKDB/${id}`)
      .then(response => response);
  }
}

export default new EkdbRepository();
