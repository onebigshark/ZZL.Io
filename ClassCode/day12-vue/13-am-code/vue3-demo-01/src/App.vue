<!-- 一个vue文件--一个vue是一个组件--包含 css-js-html -->
<!-- vue文件的中模板代码 可以借助  Vue 3 Snippets 这个插件，可以让我们使用vue语法有些代码块提示 
-->
<!-- 快捷提示 vueinit -->

<!-- Vue Official，这个插件让我们在vue文件里面写代码的时候有更好的提示-识别vue文件 -->

<!-- 写js -->
<script>
//导出一个默认对象--这个对象中可以使用vue配置项
export default {
  // 1----data配置项是一个函数---返回一个对象-对象中对应数据-变量-状态
  data: function () {
    return {
      // 定义了一个变量--数据---状态
      //这个数据可以在当前组件的-模板中使用--语法：插值语法--双大括号插值
      a: "hell data",
    };
  },
};
</script>

<!-- 写html-组件模板 -->
<template>
  <h1>hello vue</h1>

  <!-- 2--模板语法：插值语法--双大括号插值 -->
  <h2>{{ a }}</h2>
</template>

<!-- 样式 css -->
<style scoped></style>
