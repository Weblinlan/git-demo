import axios from "axios";

const request = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
  timeout: 5000,
});

//请求拦截器

export default request;
