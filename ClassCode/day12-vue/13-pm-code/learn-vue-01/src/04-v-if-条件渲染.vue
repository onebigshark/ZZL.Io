<template>
  <!-- 用的多 -->
  <div v-if="flag">内容1</div>
  <div v-if="flag">
    <h1>111</h1>
    <p>111</p>
  </div>

  <!-- template-不会渲染出来  -->
  <!-- template--空的容器标签  -->
  <template v-if="flag">
    <h1>111</h1>
    <p>111</p>
  </template>

  <hr />

  <div v-if="flag">内容1</div>
  <div v-else>内容2</div>

  <hr />

  <div v-if="age >= 18">成年要展示的内容</div>
  <div v-else-if="age >= 16">16-18 展示的内容</div>
  <div v-else>未成年 展示的内容</div>

  <!-- 数据在模板不需要加this -->
  <button @click="flag = !flag">按钮</button>

  <hr />

  <!-- Property "hello" was accessed during render but is not defined on instance. -->
  <!-- hello 属性  被使用 在 渲染的时候，但是没有在 vue实例上定义 ---data中没有定义hello数据 -->
  <!-- <div v-show="flag">{{ hello }}</div> -->
  <div v-show="flag">hello</div>
</template>
<script>
/*
    条件渲染指令 
         v-if="式子"
         v-if="变量-布尔值"

     <div v-if="">内容1</div>

     作用：控制标签的显示和隐藏 ，，会根据后面的值 ，true就显示 ，false 就隐藏
         --动态添加和删除节点--实现显示和隐藏


         v-show="式子"
         作用：控制标签的显示和隐藏 ，，会根据后面的值 ，true就显示 ，false 就隐藏
         --控制display属性--实现显示和隐藏


         **如果频繁切换 显示和隐藏效果 用 v-show，反之用v-if


*/
export default {
  data() {
    return {
      flag: true,
      age: 1,
    };
  },
};
</script>
<style lang=""></style>
