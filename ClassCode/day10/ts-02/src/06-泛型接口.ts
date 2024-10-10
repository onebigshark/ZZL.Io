/* 
    泛型接口--就是在接口中使用泛型
*/

//一般标准的后端提供api接口- 返回数据中都会有一个data属性
// data属性类型是不确定，
// 如果请求的是用户信息，data是一个用户对象
// 如果请求的商品列表 ，data就是一个数组，数组中 商品对象

// 接口泛型的定义 是在接口名后面 加尖括号
// interface IRes<T> {
//   code: T;
// }

// interface IRes {
//   code: number;
//   message: string;
//   data: { username: string; uid: number };
// }

// interface IResList {
//   code: number;
//   message: string;
//   data: Array<{ title: string; price: number }>;
// }

interface IRes<T> {
  code: number;
  message: string;
  data: T;
}

// 使用接口的时候，传入了泛型，泛型是一个用户对象
// T = { username: string; uid: number }
let userResData: IRes<{ username: string; uid: number }> = {
  code: 1,
  message: "sss",
  data: { username: "aa", uid: 1 },
};
userResData.data.username;

// 使用接口的时候，传入了泛型，泛型是一个数组
// T = Array<{ title: string; price: number }>
let ListResData: IRes<Array<{ title: string; price: number }>>;
// ListResData.data.forEach((v) => {
//   v.price;
//   v.title;
// });

// nterface Array<T>  js中定义的好 数组接口（支持泛型）
let arr: Array<number> = [1, 2, 3];
