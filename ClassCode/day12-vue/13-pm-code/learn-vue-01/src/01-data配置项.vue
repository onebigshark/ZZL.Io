<template>
  <!-- 2-模板语法---双大括号插值 -->
  <div>{{ str }}</div>
</template>
<script>
export default {
  // 1- data配置项，是一个函数，函数要reutrn 一个对象，return的对象中定义数据--状态--变量
  //
  // data: function () {
  //   return {
  //     str: "hello world",
  //   };
  // },
  //对象方法的简写

  //每次调用data 都会得到新的对象
  // data为什么要是函数？（背过）  组件复用的时候，可以得到一个新的对象（组件复用的时候，每一个组件都维护自己的数据）
  data() {
    return {
      str: "hello world",
    };
  },

  /* 
    vue2 data配置是一个写成一个对象，vue3 data必须是一个函数，return一个对象
  */

  // 这种写法每次使用data 都是同一个对象
  // data: {
  //   str: "helo",
  // },
};
</script>
<style lang="css"></style>
