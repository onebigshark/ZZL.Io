//js-ts 常量--好处 有提示，
// 一般会把常见的数字值，或者字符串值 定义成常量--后续就有提示，不容易拼错,提高代码的可读性
localStorage.setItem("token", "aa");
localStorage.getItem("toekn");

const TOKN_KEY = "token";

localStorage.setItem(TOKN_KEY, "aa");
localStorage.getItem(TOKN_KEY);

const RED = "red";
const GREEN = "green";

RED;
GREEN;

// TS 中我们使用 `const` 来声明常量，但是有些取值是在一定范围内的一系列常量，比如一周有七天，比如方向分为上下左右四个方向。
// 这时就可以使用枚举（Enum）来定义

// ***字符串枚举--》
enum BG_COLOR {
  RED = "#fff000",
  GREEN = "#fff222",
}

console.log(BG_COLOR.RED);
console.log(BG_COLOR.GREEN);
BG_COLOR.GREEN;

console.log(BG_COLOR);

enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}
console.log(Direction.Up);

enum CODE {
  //默认是从0开始
  FAILD, //0
  SUCCESS, //1
  //也可以指定具体的值
  NO_LOGIN = 401,
}
// if(data.code == CODE.SUCCESS){

// }

enum FONT_WEIGHT {
  BOLD = 600,
  BOLDER = 700,
}

FONT_WEIGHT.BOLD;
FONT_WEIGHT.BOLDER;
