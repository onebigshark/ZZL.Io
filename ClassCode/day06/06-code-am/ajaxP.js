// 封装wait 函数-- 自己写一遍
//promise- 封装xhr--  四个函数
let ajaxP = {};
ajaxP.get = function (obj) {
  //使用promise封装异步操作，
  // 1-写一个函数
  // 2- 函数内部创建一个prmise对象，
  // 3- promise对象里面写异步操作（xhr），成功以后调用resolve，失败以后调用reject
  // 4-这个函数内部返回promise对象
  return new Promise(function (resolve, reject) {
    //     promise对象里面写异步操作（xhr），成功以后调用resolve，失败以后调用reject
    // 这个函数内部返回promise对象

    // fn 里面的代码 就是我们请求成功以后下一步要做的事情、fn什么时候调用？
    let { url, search, headers } = obj;

    /*  
search: {
  username: "zahgnsan",
  password: 123,
} 

 自动将对象 转为 k=v&k2=v2  添加到url？号后面
*/
    let keyValue = [];
    for (let key in search) {
      let value = search[key];
      // k=v
      let tempStr = key + "=" + value;
      // username="zahgnsan",
      // password=123,
      keyValue.push(tempStr);
    }
    //   username=zahgnsan&password=123
    url = url + "?" + keyValue.join("&");

    // obj.url
    // obj.method
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    //   headers -> {key1：value1，key2：value2}

    //   xhr.setRequestHeader("要设置的请求头的字段名", "字段值");
    //遍历传入的请求头对象，添加到 xhr上
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }

    xhr.send();
    xhr.onload = function () {
      if (/^2/.test(xhr.status)) {
        let obj = JSON.parse(xhr.responseText);

        resolve(obj);
      } else {
        // 返回状态吗
        reject(xhr.status);
      }
    };
    xhr.onerror = function () {
      reject("网络出错");
    };

    //
  });
};

ajaxP.post = function (obj) {
  return new Promise((resolve, reject) => {
    // success 外部传入了一个函数
    let { url, data, headers } = obj;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("content-type", "application/json");
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }

    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
      if (/^2/.test(xhr.status)) {
        let resObj = JSON.parse(xhr.responseText);
        //需要外部处理这个结果
        //调用请求成功的回调函数，传入实参
        resolve(resObj);
      }
    };
  });
};

ajaxP.put = function (obj) {
  return new Promise((resolve, reject) => {
    // success 外部传入了一个函数
    let { url, data, headers } = obj;

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("content-type", "application/json");
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
      if (/^2/.test(xhr.status)) {
        let resObj = JSON.parse(xhr.responseText);
        //需要外部处理这个结果
        //调用请求成功的回调函数，传入实参
        resolve(resObj);
      }
    };
  });
};
ajaxP.patch = function (obj) {
  // success 外部传入了一个函数
  return new Promise((resolve, reject) => {
    let { url, data, headers } = obj;

    let xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);
    xhr.setRequestHeader("content-type", "application/json");
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
      if (/^2/.test(xhr.status)) {
        let resObj = JSON.parse(xhr.responseText);
        //需要外部处理这个结果
        //调用请求成功的回调函数，传入实参
        resolve(resObj);
      }
    };
  });
};
ajaxP.delete = function (obj) {
  // fn 里面的代码 就是我们请求成功以后下一步要做的事情、fn什么时候调用？
  return new Promise((resolve, reject) => {
    let { url, headers } = obj;
    // obj.url
    // obj.method
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        let obj = JSON.parse(xhr.responseText);

        resolve(obj);
      }
    };
  });
};
