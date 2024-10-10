// any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值

// ts  编译时都不报错。原因就是`x`的类型是`any`，TypeScript 不对其进行类型检查

let a: any;
a = "1";
a = 1;
a = false;

// a()
// a.aa = 2
