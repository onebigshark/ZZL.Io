// 类型别名 中使用泛型--》type 类型<T>
// 后面类型中，就可以使用T

// 定义type的时候，T 叫泛型参数
type IRes<T> = {
  code: number;
  message: string;
  data: T;
};

// 使用type的时候，传入具体的类型
// T = number
let obj: IRes<number> = {
  code: 1,
  message: "aa",
  data: 11,
};

obj.data;
