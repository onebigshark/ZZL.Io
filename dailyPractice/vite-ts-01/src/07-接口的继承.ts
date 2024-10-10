// 如果两个接口之间有相同属性或者方法，
// 可以将公有的属性或方法抽离出来，
// 可以通过继承来实现复用。
interface IPoint2D {
  x: number;
  y: number;
}

// interface IPoint3D {
//   x: number;
//   y: number;
//   z: number;
// }

// IPoint3D 接口继承 IPoint2D
//IPoint3D 就会拥有  IPoint2D 所有的属性和方法
interface IPoint3D extends IPoint2D {
  //必须有x属性和y属性
  z: number;
}
let obj: IPoint3D = { x: 1, y: 2, z: 1 };
