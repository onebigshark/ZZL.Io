// 使用类型断言来告诉 TS，我（开发者）比你（编译器）更清楚这个参数是什么类型，断言为什么类型，就可以使用这个类型的属性或者是方法，编译的时候你就别给我报错了

// 断言语法
// 值 as 类型

//  querySelector的返回值是 Element | null
// box 可能是 Element 或者 null
let box = document.querySelector("#box");

// ts 会报错 “box”可能为 “null”
// box.innerHTML = "11";

// 断言box 为 Element 类型
(box as Element).innerHTML = "22";
//不为空断言
box!.innerHTML = "22";

let a = box as Element;
a.innerHTML = "22";

// MDN 官方文档
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement
(box as HTMLInputElement).value;
(box as any).value;

let div = document.querySelector("#box") as HTMLDivElement;
