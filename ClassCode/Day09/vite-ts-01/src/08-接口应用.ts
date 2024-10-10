// 1-安装axios模块
// pnpm i axios
// 2-引入axios模块
import axios from "axios";

interface IRes {
  code: number;
  //   list:
}

axios({
  url: "http://localhost:8888/goods/list",
  method: "get",
}).then((r) => {
  console.log(r.data);
  //   r.data.code;
  //   r.data.list;
  //描述服务器返回的对象的类型
  let obj: IRes = r.data;
  //   obj.code
});
