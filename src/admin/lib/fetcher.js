import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
//axios.defaults.baseURL = 'https://interior-sondra-kimilguk-app-99ae6359.koyeb.app';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
