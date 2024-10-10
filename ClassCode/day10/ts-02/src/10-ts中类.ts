// ts中类和js中类 基本一样
class Dog {
  //定义属性-添加类型---没有初始值的时候，必须在构造函数中赋值
  name: string;
  //只读属性，只能在初始化的时候赋值，后续不能赋值--》像对象内部的常量
  readonly age: number = 0;

  //类的构造函数--参数要执行类型--默认返回Dog类型的对象
  constructor(name: string) {
    this.name = name;
  }

  //定义方法
  run(time: number): number {
    console.log(this.name + "跑了" + time + "时间");

    return time;
  }

  //****定义 test属性的，getter方法和setter方法
  //getter方法--会在获取test属性的时候执行
  //setter方法--会在设置test属性的时候执行

  //定义一个同名属性 ，属性名加下划线

  //   （使用getter和setter 结合 同名下划线属性 可以来 监听类内部某一个属性的设置或者获取）

  //好处-可以监听test属性设置和获取
  _test: number = 0;
  get test() {
    console.log("test getter");
    return this._test;
  }
  set test(v) {
    console.log("test setter");
    console.log(v); //2000
    //把设置给test属性的值，保存到同名属性上 _test
    this._test = v;
  }
}

// 类 也是一个中类型
let d1: Dog = new Dog("旺财");
// 无法为“age”赋值，因为它是只读属性
// d1.age = 111;
d1.run(100);

d1.test = 2000;
console.log(d1.test);
