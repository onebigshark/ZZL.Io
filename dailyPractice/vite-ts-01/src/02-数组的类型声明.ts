// 声明了arr的类型为数组 , [] 表示数组类型
//  number[]  中括号前面来限定数组元素的类型 元素为数字类型
//  string[]  中括号前面来限定数组元素的类型 元素为字符串

let arr: string[];
// arr = [1, 2, 3];
arr = ["aa", "bb"];
// arr.push(11);
arr.push("aa");

// 写法2  -- 泛型写法
// Array目前理解为构造函数
// 变量后面:Array<元素类型>
// 变量后面:Array<number>  变量是数组，元素为数字类型
// 变量后面:Array<string> 变量是数组，元素为字符串类型
let arr2: Array<number>;
arr2 = [1, 2, 3];
// arr2 = ["aa", "bb"];
