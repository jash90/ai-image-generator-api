// localApi.js
import axios from "axios";

const localApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // Any other global settings you want (headers, etc.)
});

export default localApi;
