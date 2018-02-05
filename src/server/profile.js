import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/profile`,
  headers: {'x-auth': window.localStorage.token}
});

export default instance;
