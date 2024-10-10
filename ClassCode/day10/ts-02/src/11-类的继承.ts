/* 
    一般开发中（后端开发--游戏开发---安卓开发--iOS开发）

      会把 某一个东西 他们共有的属性和方法定义到一个 基类（父类）

      然后子类-继承父类（基类） 子类只需新增功能（属性和方法）

      实例属性 和方法(比较多)-----必须先用来创建对象（创建实例对象--创建实例）-，在对象上使用的属性和方法 （能被子类继承）
      静态属性（类属性-类方法） 和方法-----直接在类名是执行 (能也被继承)


      子类的构造函数----
                /子类的构造函数---如果子类实现了自己构造函数，必须调用super，super 是父类的构造函数
            //--------------- 调用super 是为了执行父类的代码，让父类创建属性和方法
            //如果子类，没有实现自己构造函数，ts 会自动添加一个构造函数

      子类中可以添加自己的属性和方法-----只能子类自己使用     
      
      


      重写----如果子类中重写了 父类的中某一个方法，，
            子类的实例在调用方法时候，调用的自己自己的方法

            //重写的时候--子类方法内部可以使用super关键字来调用 父类的方法
                // super.run()-->父类里面的run方法


*/

class Hero {
  //静态属性
  static aa = "hello";
  //静态方法
  static test() {}
  //实例属性
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //实例方法
  run() {
    console.log("父类的 run 很多逻辑");
  }
  pifu() {
    console.log("pifu 很多逻辑");
  }
}

// ADC 叫 子类--派生类（基于别的类创建出来的）
// HERO 叫 父类--基类
// 子类就用有用父类的所有属性和方法
class ADC extends Hero {
  //子类的构造函数---如果子类实现了自己构造函数，必须调用super，super 是父类的构造函数
  //--------------- 调用super 是为了执行父类的代码，让父类创建属性和方法
  //如果子类，没有实现自己构造函数，ts 会自动添加一个构造函数

  //   子类自己的属性
  pi: string;
  constructor(name: string, pi: string = "原皮") {
    super(name);
    this.pi = pi;
  }

  // 子类自己的方法
  bbb() {}

  // 重写：如果子类中重写了 父类的中某一个方法
  run(): void {
    console.log("子类的run");

    //重写的时候--子类方法内部可以使用super关键字来调用 父类的方法
    // super.run()-->父类里面的run方法
    super.run();
  }
}
class AP extends Hero {}

let houyi = new ADC("后羿", "黄金射手座");
houyi.name;

houyi.run();
houyi.pifu();

// let xiaoqiao = new AP("小乔");
// xiaoqiao.name;
// xiaoqiao.run();
// xiaoqiao.pifu();

// Hero.aa;
// Hero.test;
// AP.aa;
// AP.test;
