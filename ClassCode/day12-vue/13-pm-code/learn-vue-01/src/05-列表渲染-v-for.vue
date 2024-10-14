<template>
  <div></div>

  <ul>
    <li v-for="(v, i) in arr">元素：{{ v }}---下标：{{ i }}</li>
  </ul>
  <ul>
    <li v-for="(v, i) of arr">元素：{{ v }}---下标：{{ i }}</li>
  </ul>

  <ul>
    <li v-for="(item, index) in arr2">
      <h2>{{ item.title }}</h2>
      <h2>{{ item.id }}</h2>
      <!-- :checked="item.completed" 动态绑定 checked属性 -->
      <input type="checkbox" name="" id="" :checked="item.completed" />
    </li>
  </ul>
  <ul>
    <!-- key尽量唯一 ，，用id -->
    <li v-for="(item, index) in items" :key="item.id"></li>
  </ul>
</template>
<script>
/* 
    列表渲染---
    v-for指令 --- 循环变量一个标签
        <li v-for="式子"></li>
        <li v-for="v in 数组"></li>
        <li v-for="v of 数组"></li>
        v是元素


    key 要求是唯一的一个值
    key好处： 提供列表渲染性能
    底层原理：(虚拟dom--背过)
        vue 底层 根据对象--生成虚拟dom（一个js对象{tag:'div'}），再根据虚拟dom，生成真实dom

        如果数据改变--会重新生成虚拟dom， 新的虚拟dom和老的虚拟dom对比（diff算法），然后找到不同，同key去修改对应的真实dom。 不是刷新整个列表
*/
export default {
  data() {
    return {
      arr: [12, 3, 3],
      arr2: [
        { id: 1, title: "你好", completed: false },

        { id: 2, title: "测试", completed: true },
      ],
    };
  },
};
</script>
<style lang=""></style>
