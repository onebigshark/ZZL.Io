let arr = [1, 2];
let str = "aaa";
let obj = { length: 22 };

let d = new Date();

//定义ILength接口--要求对象有length属性
interface ILength {
  length: number;
}

// ***要泛型 必须 有 length属性  （就是要对泛型做一些约束--约束必须有哪些属性或者哪些方法）

// 这其中的关键就是 `<T extends ILength>`，让这个泛型继承接口 `ILength`，这样就能约束泛型。
// 这就叫泛型约束
function printLength<T extends ILength>(value: T) {
  // 打印value长度属性
  value.length;
}
// printLength(d);
printLength(arr);
printLength(obj);
printLength(str);
