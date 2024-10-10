// 类型声明
// 指定变量的类型
// 如果赋值的类型，跟类型声明不一致就会报错
// 语法 : let 变量:具体的类型
// 小写的单词： number string  boolean
let age: number;

age = 1;
console.log(age);
//
// age = "aa";
let username: string;
username = "aaa";
// username = 22;

let flag: boolean;
flag = true;
flag = false;
//ts这个报错--不影响代码执行
// flag = 2;
console.log(flag);
console.log(111);

username.includes("aa");

// 函数的形参-- 返回值的类型声明
// 参数a b 都为数字类型
// 返回值为 数字类型
function sum(a: number, b: number): number {
  let res: number = a + b;
  return res;
}

sum(1, 2);

// let c:undefined
// let c2 = undefined

let n = 23234234;
console.log(n);
let n2: bigint = 121212n;
console.log(n2);
let user: object = { a: 1 };
// user
user = [];
console.log(user);
// user.a
