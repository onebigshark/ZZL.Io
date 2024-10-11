// 编程中 --》 类是对象模版--》  自己定义类（定义一类东西都具有属性和方法）， 用类创建对象（自动就会有类中定义的属性和方法）
// 类是一个抽象的概念(人类)，而对象是具体存在的（具体某一个人，张三，李鑫）

// *****所谓抽象类，是指**只能被继承，但不能被实例化的类**，就这么简单。
//  解释：抽象类  还是一个类---只能用去产生子类， 不能直接去抽象类创建对象

// 使用 abstract 关键字 定义类，就是抽象类

// 抽象类有两个特点：

// - 抽象类不允许被实例化
// - 抽象类中的抽象方法必须被子类实现
// 抽象类-一般作为父类（基类）
abstract class Animal {
  //实例属性
  public name: string;
  //构造函数
  constructor(name: string) {
    this.name = name;
  }
  //实例方法
  run() {
    console.log(this.name + "跑");
  }
  // abstract 抽象方法--没有 函数体
  public abstract sayHi(): void;
}
// let a1 = new Animal();

/* 
    面向对象三大特点：
            封装-》定义类-把某一类东西，他们的属性和方法都定义在类中(复用一个类)
            继承-》子类继承父类-》子类就会拥有父类的所有属性和方法(复用-父类)
            多态-》指的是，父类定义一个抽象方法，在**多个子类中有不同的实现**，运行的时候不同的子类就对应不同的操作

*/

class Dog extends Animal {
  sayHi() {
    console.log(this.name + "汪汪");
    // return this;
  }
}
class Cat extends Animal {
  public sayHi(): void {
    console.log(this.name + "喵喵");
  }
}

let d1 = new Dog("小黑");
let c1 = new Cat("小白");
// 同样都是动物-但是相同的方法-表现出了多中形态--》执行代码不一样--多态
d1.sayHi(); //
c1.sayHi();
