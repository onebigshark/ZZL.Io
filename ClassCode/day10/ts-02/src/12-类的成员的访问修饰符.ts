// 类的内部成员（属性和方法）的外部可访问性，
// 由三个可访问性修饰符（access modifiers）控制：
// `public`、 公开 （默认）
// ----`public`，公有的，一个类里默认所有的方法和属性都是 public。
//  类自己内部（this成员名名）和外部能访问（实例对象.成员名），，
//  子类内部（this成员名名）和外部能访问（实例对象.成员名），，
// `private`  私有
//  -----只有 类自己内部（this成员名名）
//
//  子类内部（this成员名名）和外部能访问（实例对象.成员名），

//`protected` 受保护的
//  只能 在类和子类的内部 可以通过this访问，其他地方都访问不了
//

// 这三个修饰符的位置，都写在属性或方法的最前面。
class Animal {
  //公开成员
  public name: string;
  //私有成员
  private age: number;

  //   受保护的成员
  protected bb: string = "aa";

  public constructor(name: string) {
    this.name = name;
    this.age = 0;
    // this.bb
  }
  public run() {}
}

let a1 = new Animal("旺财");

a1.name;
a1.run();

class Dog extends Animal {
  constructor(name: string) {
    super(name);
    this.name;
    this.run();
    this.bb;
  }
}

let d1 = new Dog("小强");
console.log(d1.name);
d1.run();
