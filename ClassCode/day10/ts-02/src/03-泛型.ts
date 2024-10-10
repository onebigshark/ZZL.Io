// 泛型是指在定义函数、接口等类型的时候，不预先指定具体的类型，而是在使用的时候再指定具体类型的一种特性。
import axios from "axios";

// https://www.tslang.cn/docs/handbook/generics.html  中文文档

// 1-参数支持任意类型 ---
// 2-参数的类型和返回值的类型保持一致 --》 输入输出要一致

/* 

    泛型函数 （函数中怎么使用泛型）

*/
// 函数名或者接口名 后面可以跟一个  尖括号，<>，  尖括号中可以写一个形参  <T> --》T 也叫泛型参数---T类似函数形参，参数值不确定 --要等函数调用的时候，传入具体类型
// 泛型就是把类型 作为参数 传入到函数内部（接口内部）
//
function print<T>(arg: T): T {
  return arg;
}

// 调用函数的时候先使用尖括号 传入具体的类型
// T = string
//string 赋值给T
// 函数调用的时候才确定的了 T的类型
print<string>("hello");
// print<string>(123);

print<number>(111);
print<object>({ a: 1 });
print<object>({ a: 1 });

// ****利用了泛型指定了返回值的类型
let div = document.querySelector<HTMLDivElement>("#box");
div!.innerHTML = "ehllo";
let ipt = document.querySelector<HTMLInputElement>("#box");
ipt!.value = "11";

//**** */ promsie 函数 泛型控制 promise成功结果的类型
let p = new Promise<number>(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 20000);
});
p.then((r) => {
  console.log(r);
});

interface IResList {
  code: number;
  message: string;

  // ****数组的泛型 是限制数组中元素类型
  list: Array<{ title: string }>;
}

// ****axios 通过泛型，执行请求成功以后的结果的类型
let p2 = axios<IResList>({
  url: "http://localhost:8888//goods/list",
  method: "get",
});
p2.then((r) => {
  console.log(r.data);
  //   let data:IResList = r.data;
  // data.code
  r.data.code;
  r.data.list.forEach((v) => {
    // v.title
  });
});

// Array<T>(arrayLength: number): T[]
// new Array<
let arr2 = new Array<number>();
arr2.push(11);
// arr2.push("22");
