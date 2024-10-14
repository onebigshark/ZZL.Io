<template>
  <div>{{ n }}</div>
  <button v-on:click="n++">按钮1--行内事件处理</button>
  <button v-on:click="fn">按钮2--事件处理函数</button>
  <button v-on:click="fn3()">按钮3--自己调用函数</button>

  <!-- 简写 -->
  <button @click="fn3()">按钮3--自己调用函数</button>
  <!-- btn.onclick = funcion(){} -->
</template>
<script>
/*
    事件绑定指令
    v-on:事件名='表达式'
    v-on:事件名='一句js代码'
    v-on:事件名='函数名'
    v-on:事件名='函数名()'

    简写
    @事件名='函数名()'

    后面的函数要提前在methods配置项中定义好
 */
export default {
  data() {
    return {
      n: 1,
    };
  },
  // ***methods 配置项 定义模板中需要的方法--里面使用data定义的数据，需要加this
  methods: {
    fn() {
      console.log("click btn2");
      //
      this.n++;
      //   this- 是 当前组件对象（vue文件对象）-组件实例
    },
    fn3() {
      console.log("click btn3");
      this.n++;
      //   this- 是 当前组件对象（vue文件对象）-组件实例
    },
  },
};
</script>
<style lang="css"></style>
