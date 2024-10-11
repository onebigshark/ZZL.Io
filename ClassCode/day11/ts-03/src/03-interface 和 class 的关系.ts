// interface 和 class 的关系

// interface 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。

// interface 同样可以用来约束 class，要实现约束，需要用到 `implements` 关键字。

// implements 是实现的意思，class 实现 interface。

/* 
  类可以实现某个接口的属性和方法（跟继承有点像） =》限制类必须有哪些属性和方法  
    语法

    class 类名  implements 接口 {

    }

*/

// 定义接口---播放音乐
interface MusicInterface {
  playMusic(): void;
}

// // 定义类---手机类--实现了播放音乐的接口
// class Cellphone implements MusicInterface {
//   playMusic() {}
// }

// class TV implements MusicInterface{
//     playMusic(): void {

//     }
// }

interface CallInterface {
  makePhoneCall(): void;
}

// 一个类实现多个接口（类似于 多继承功能--）
class Cellphone implements MusicInterface, CallInterface {
  makePhoneCall(): void {
    throw new Error("Method not implemented.");
  }

  playMusic() {}
}
