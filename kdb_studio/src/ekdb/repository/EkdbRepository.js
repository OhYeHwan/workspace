import axios from 'axios';
import EkdbModel from '../model/EkdbModel';

class EkdbRepository {
  funcGet() {
    return axios
      .get('http://192.168.156.18:3009/EKDB')
      .then(response => EkdbModel.fromApiModels(response.data));
  }

  funcInsert(data) {
    return axios
      .post('http://192.168.156.18:3009/EKDB', data)
      .then(response => response.data);
  }

  funcUpdate(name, data) {
    return axios
      .patch(`http://192.168.156.18:3009/EKDB/${name}`, data)
      .then(response => response.data);
  }

  funcDel(name) {
    return axios
      .delete(`http://192.168.156.18:3009/EKDB/${name}`)
      .then(response => response.data);
  }
}

export default new EkdbRepository();
