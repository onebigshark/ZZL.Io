/* 
api  application interface  应用程序接口


api接口-接口文档-后端接口  -后端写的http接口-请求 （后端提供的接口，给前端操作，控制后端）

数组常见的api，数组的属性或者方法--》数组给程序提供的api，通过这些api（属性或方法）控制数组


*****ts中接口  接口类型用来，描述一个对象的类型
    （描述一下对象有哪些属性和方法）
    （对象的形状进行描述）******
    interface 是对象的模板 -> class 是 对象的模版
interface  接口
一般当一个**对象类型被多次使用**时，一会使用 interface 来描述对象的类型，达到**复用**的目的

*/

// 接口没有具体的实现
// 定义接口
// IPerson 接口名 （接口类型） 习惯上加一个大小的I
interface IPerson {
  // ***readonly只读属性
  //firstName 属性 ，属性值是字符串类型
  readonly firstName: string;
  //lastName 属性 ，属性值是字符串类型
  lastName: string;
  //age 属性 ，属性值是数字类型
  //*** 可选属性
  age?: number;
  //sum方法，两个形参，都是数字类型，返回值数字
  sum: (a: number, b: number) => number;
  //sing方法，一个形参，字符串类型，返回字符串类型
  sing(songName: string): string;
}

// 接口限制了obj的类型，遵循IPerson接口 （IPerson 要求的属性和方法都要有）
// obj是IPerson类型或者 obj遵循IPerson接口
let obj: IPerson = {
  firstName: "张",
  lastName: "三",
  //   age: 19,
  sum(a, b) {
    return a + b;
  },
  sing(songName) {
    return songName + ".mp3";
  },
};

obj.age;
obj.sing("aaa");
// obj.ccc
// obj.firstName = "aa";

// let arr: Array<number>;

// class Person {
//   firstName = 1;
//   sing(songName) {
//     console.log("111");
//   }
// }

// 如果一个对象上有多个不确定的属性;
interface IObj {
  //属性名可以是任意的：属性值是 字符串类型
  [propName: string]: string;
}
let obj2: IObj = {
  aa: "11",
  bb: "22",
};

// *** 接口也可以限制  函数类型(少)

interface ISum {
  (a: number, b: number): number;
}
let fn: ISum = function (a, b) {
  return a + b;
};
fn(1, 2);
