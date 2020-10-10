import axios from 'axios';

const defaultsAxios = {
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts: process.env.REACT_APP_TS,
    apikey: process.env.REACT_APP_API_KEY,
    hash: process.env.REACT_APP_HASH,
  },
};

const HttpService = axios.create(defaultsAxios);

export default HttpService;
