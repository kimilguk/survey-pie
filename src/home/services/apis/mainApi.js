import axios from 'axios';

const mainApi = axios.create({
  //baseURL: 'http://localhost:4000',
  baseURL: 'https://interior-sondra-kimilguk-app-99ae6359.koyeb.app',
});

export default mainApi;
