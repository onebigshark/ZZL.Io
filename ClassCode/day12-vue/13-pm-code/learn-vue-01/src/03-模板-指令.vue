<template>
  <div></div>

  <!-- 动态绑定属性 -->
  <!-- url1 数据的值 改变--页面就会自动更新 -->
  {{ url1 }}
  <img v-bind:src="url1" alt="" />
  <img
    v-bind:src="'http://gips1.baidu.com/it/u=3874647369,3220417986&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280'"
    alt=""
  />

  <!-- ****给元素添加点击事件 -->
  <button
    @click="
      url1 =
        'http://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280'
    "
  >
    按钮
  </button>

  <!-- *** 点击按钮2 会调用fn函数  -->
  <button @click="fn()">按钮2</button>

  <hr />
  <input type="text" v-bind:value="str" />
  <input type="text" v-bind:placeholder="str" />
  <input type="text" :placeholder="str" />
</template>
<script>
/* 
    vue 模板中 用到一个特殊的语法-- 指令语法  
            --以v开的一个自定义属性
        

        v-bind 指令---属性绑定指令--动态绑定属性
            v-bind:属性名="属性值"
            v-bind:属性名="js表达式"
            v-bind:属性名="变量"
            v-bind:属性名="js式子"
            v-bind:属性名="一句代码"

           ----简写 
            :属性名="一句代码"

*/
export default {
  data() {
    return {
      url1: "https://gips3.baidu.com/it/u=3732737575,1337431568&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f1440_2560",
      str: "aaa",
    };
  },
  //****methods 方法--》里面 定义模板需要的函数
  //  *** --- 方法中修改 data中定义的数据 得通过this.属性名
  methods: {
    fn() {
      console.log(" btn2 click");
      this.url1 =
        "http://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280";
    },
  },
};
</script>
<style>
img {
  width: 100px;
}
</style>
