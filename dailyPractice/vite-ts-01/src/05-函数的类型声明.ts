/* 
    
函数的类型-》确定了函数的参数和返回值的类型，这个函数就确定了类型

  声明式函数
  赋值式函数

*/
/* 
  声明式函数

  (a: number, b: number)  参数的类型

(a: number, b: number):number 小括号后面的冒号 限制 返回值的类型
*/
function box(a: number, b: number): number {
  return a + b;
}

/* 

  赋值式函数
*/
/* 
    写法1
*/
let fn = function (a: number, b: number): number {
  return a + b;
};
/* 
    写法2

    (a: number, b: number) => number  表示 函数类型， 这种写法有点像箭头函数
*/
let fn2: (a: number, b: number) => number = function (a, b) {
  return a + b;
};

/*
    可选参数
    (a: number, b?: number)   b? 表示b这个参数可以有，也可以没有
 */

function fn3(a: number, b?: number) {}
fn3(1);
fn3(1, 2);

let arr = [1, 3];
// join(separator?: string): string
// arr.join()

/* 
    参数的默认值

*/
function fn4(a: number = 0, b: number) {
  console.log(a);
}

fn4(undefined, 1);

/* 

    函数赋值--类型不一致会报错
*/
function fn5(a: number): number {
  return a + 1;
}
let fn6: (a: number) => number = fn5;

/* 
函数没有明确返回值，默认返回 Void 类型
*/

function fn7() {}

function fn8(a: number): void {}
