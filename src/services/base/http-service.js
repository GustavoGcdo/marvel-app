import axios from 'axios';

const defaultsAxios = {
  baseURL: process.env.BASE_URL,
  params: {
    ts: process.env.TS,
    apikey: process.env.PUBLIC_KEY,
    hash: process.env.HASH,
  },
};

console.log(defaultsAxios);

const HttpService = axios.create(defaultsAxios);

export default HttpService;
