let ajax = {};
ajax.get = function (obj) {
  // fn 里面的代码 就是我们请求成功以后下一步要做的事情、fn什么时候调用？
  let { url, success, search } = obj;

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
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      let obj = JSON.parse(xhr.responseText);

      success(obj);
    }
  };
};
ajax.post = function (obj) {
  // success 外部传入了一个函数
  let { url, data, success } = obj;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    if (/^2/.test(xhr.status)) {
      let resObj = JSON.parse(xhr.responseText);
      //需要外部处理这个结果
      //调用请求成功的回调函数，传入实参
      success(resObj);
    }
  };
};
ajax.put = function (obj) {
  // success 外部传入了一个函数
  let { url, data, success } = obj;

  let xhr = new XMLHttpRequest();
  xhr.open("PUT", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    if (/^2/.test(xhr.status)) {
      let resObj = JSON.parse(xhr.responseText);
      //需要外部处理这个结果
      //调用请求成功的回调函数，传入实参
      success(resObj);
    }
  };
};
ajax.patch = function (obj) {
  // success 外部传入了一个函数
  let { url, data, success } = obj;

  let xhr = new XMLHttpRequest();
  xhr.open("PATCH", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    if (/^2/.test(xhr.status)) {
      let resObj = JSON.parse(xhr.responseText);
      //需要外部处理这个结果
      //调用请求成功的回调函数，传入实参
      success(resObj);
    }
  };
};
ajax.delete = function (obj) {
  // fn 里面的代码 就是我们请求成功以后下一步要做的事情、fn什么时候调用？
  let { url, success } = obj;
  // obj.url
  // obj.method
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      let obj = JSON.parse(xhr.responseText);

      success(obj);
    }
  };
};

// ajax.get({
//   url: "",
//   search: {
//     username: "zahgnsan",
//     password: !23,
//   },
// });
