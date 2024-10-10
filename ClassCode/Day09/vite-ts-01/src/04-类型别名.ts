let arr1: (number | string)[]=["1",2];
let arr2: number=2;
console.log(arr1, arr2);
// ****类型别名
// type 定义新的类型--》 给后面的一个类型（类型的写法比较长），起一个新的名字MyArray
// ***简化复杂类型写法 ，方便后面重复使用
type MyArray = (number | string)[];
let arr3: MyArray=["1",2];
let arr4: MyArray=["1",2];
console.log(arr3, arr4);