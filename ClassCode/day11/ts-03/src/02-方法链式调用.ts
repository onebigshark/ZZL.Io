// 链式调用
//
let arr = new Array(1, 2, 3);
arr.filter((v) => v > 1).map((v) => v + 10);

let p = Promise.resolve();
p.then(function () {}).catch(function () {});

class MyPromsie {
  then() {
    //返回了自己--》实例对象自己，实现链式调用
    return this;
  }
  catch() {}
}
let p2 = new MyPromsie();
p2.then().catch();
