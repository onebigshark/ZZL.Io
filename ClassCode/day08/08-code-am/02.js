let a = "aaa";
a.getTime();

a.indexOf("aa");

// js 有些时候会失去代码提示
let b;
// b.
function test(str) {
  str.indxeOf();
}
// test("11");
/* 
    ts中写类型声明，有时候很麻烦==类型体操  （随便写点代码就得夹类型声明，有些时候类型声明的代码比核心代码都要多）

    通过给js写注释(jsdoc)，得到 类型提示
*/

// js文档注释
/**
 *
 * @param {string} str
 */
function test2(str) {
  str.indexOf("aa");
}
