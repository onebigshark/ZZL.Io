import axios from "axios";

let http = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// 默认导出http变量
export default http;
