import http from "./http";
interface IResPListData {
  code: number;
  message: string;
  list: Array<{ img_big_logo: string; title: string; price: string }>;
}

function loadList() {
  let token = localStorage.getItem("token");
  http({
    url: "/admin/goods",
    method: "get",
    params: {
      current: 1,
      pagesize: 10,
    },
    headers: {
      authorization: token,
    },
  }).then((r) => {
    console.log(r.data);

    // jwt must be provided  (jwt 没有提供)
    // JsonWebTokenError （jsonweb token  错误）
    // JsonWebToke 一个中token， token中保存json字符串的技术，前端拿到token 是经过加密 （只能登录成功以后后端才会返回这个数据）
    //后续的所有身份认证（某些接口需要验证用户的登录权限） 都需要通过token ，前端请求的时候一般在请求头 传入token ，
    // 后端拿到请求头中token 就知道这个用户已经登录了
    //****   token 传到什么地方，需要看接口文档
    /* 
      此服务器所有需要登录后使用的接口
      - 均在 `请求头` 内携带 `authorization` 字段, 传递 `token` 值方可
      - 登录成功后会在 `响应体` 内返回 `token`
    */

    //
    let data: IResPListData = r.data;
    if (data.code == 1) {
      let arr = data.list.map(
        (v) => `
        <li>
          <h2>${v.title}</h2>
          <p>${v.price}</p>
          <img src="${v.img_big_logo}" alt="" />
      </li>
      `
      );
      let ul = document.querySelector("ul");
      // ul! 表示断定ul不为空
      ul!.innerHTML = arr.join("");
    }
  });
}
loadList();
