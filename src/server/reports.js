import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/report`,
  headers: {'x-auth': window.localStorage.token},
  responseType: 'blob'
});

export default ({
  getReport: () => {
    return instance.get('')
    .then(response => new Blob([response.data], { type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }));
  }
});
