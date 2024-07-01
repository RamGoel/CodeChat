import axios from 'axios';
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL1,
});

export default API;
