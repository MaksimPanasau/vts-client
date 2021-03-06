import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/calendar`,
  headers: {'x-auth': window.localStorage.token}
});

export default instance;
