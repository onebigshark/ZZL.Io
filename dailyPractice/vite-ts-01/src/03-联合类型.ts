// ****联合类型
// 语法
// let 变量:类型a|类型b|类型c
//变量的类型可以是后面类型的任意一种
let test: number | string;
test = 100;
test = "100";

// 联合类型可以与值类型相结合，表示一个变量的值有若干种可能
// 值类型-把一个值当做类型
let flag: true | false;
flag = false;
// flag = 1;

let gender: "男" | "女";
// gender = '22'
gender = "男";
gender = "女";

let rainbowColor: "赤" | "橙" | "黄" | "绿" | "青" | "蓝" | "紫";
rainbowColor = "青";

// rainbowColor = null;
//****联合类型--可以指定变量的值 为 某一个类型或者为null （默认情况下null值不能赋值给其他类型）
// let str: string | null;
// str = "aa";

let str = localStorage.getItem("aaa");
// str = null;
// document.querySelector('box') // element | null
// localStorage.getItem()//string | null

// **** 类型缩小
// 如果一个变量有多种类型，读取该变量时，往往需要进行“类型缩小”（type narrowing），区分该值到底属于哪一种类型，然后再进一步处理。

// 类型错误 ： 不能读取 属性of null（正在读取 indexOf） --》说明null上使用indexOf
// TypeError: Cannot read properties of null (reading 'indexOf')
// TypeError: Cannot read properties of undefined (reading 'indexOf')
// TypeError: Cannot set properties of undefined (reading 'indexOf')
if (typeof str == "string") {
  str.indexOf("aa");
}

// let box = document.querySelector("#box");
// box.innerHTML = "aa";

// ****联合类型控制数组元素的类型
let arr: (number | string)[] = [1, "aa"];
