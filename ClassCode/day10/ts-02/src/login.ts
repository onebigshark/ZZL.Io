// window.loginFn = function () {
//   console.log("login");
// };
// 引入http变量
import http from "./http";

interface IResLoginData {
  code: number;
  message: string;
  token: string;
  user: {
    username: string;
    id: number;
  };
}

let ipts = document.querySelectorAll("input");

ipts[2].onclick = function () {
  console.log("login");
  let username: string = ipts[0].value;
  let password: string = ipts[1].value;
  //调用登录接口
  //   安装axios pnpm i axios
  //    引入axios
  let p = http({
    url: "/users/login",
    method: "post",
    data: {
      username,
      password,
    },
  });
  p.then((r) => {
    console.log(r.data);
    let data: IResLoginData = r.data;
    if (data.code == 1) {
      alert(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.user.id + "");
      location.href = "./index.html";
    }
  });
};
