import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE",
  }
})

instance.interceptors.response.use(request => {
  console.log(request);
  return request;
})
