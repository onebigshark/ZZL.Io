<template>
  <div></div>
  {{ str }}
  <input type="text" name="" id="" v-model="str" />
  <button @click="fn">按钮</button>

  <!-- 数据影响页面 -->
  <!-- 页面需要展示的内容，需要在data中定义一个data -->
  <ul>
    <li v-for="v in arr">
      <h1>{{ v.title }}</h1>

      <!-- v-model 也可以用到checkbox上 -->
      <input type="checkbox" name="" id="" v-model="v.completed" />
    </li>
  </ul>
</template>
<script>
/* 
    v-model--作用 （双向绑定）
        1-能获取输入框的值(用户修改了输入框，str也会改变)
        2-能修改输入框的值----
*/
export default {
  data() {
    return {
      //str的值就显示到 input上
      str: "hello",
      arr: [
        { id: 1, title: "你好", completed: false },
        { id: 2, title: "测试", completed: true },
      ],
    };
  },
  methods: {
    fn() {
      //获取了输入框的值
      console.log(this.str);
      let obj = { title: this.str, completed: false };
      this.arr.push(obj);

      //清空输入框
      this.str = "";
    },
  },
};
</script>
<style lang=""></style>
