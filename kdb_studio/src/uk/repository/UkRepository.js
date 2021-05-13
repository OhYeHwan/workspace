import axios from 'axios';

class UkRepository {
  funcInsert(id, data) {
    return axios
      .post(`http://192.168.156.18:3009/EKDB/${id}`, data)
      .then(response => response);
  }

  // 전체 UK 조회
  funcGet(id) {
    return axios
      .get(`http://192.168.156.18:3009/EKDB/${id}/UK_LIST`)
      .then(response => response);
  }
}

export default new UkRepository();
