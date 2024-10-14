<template>
  <!-- The template root requires exactly one elemen -->
  <!--卸载了 vuter插件  -->
  <!-- vue2 template 必须有一个根元素 根节点 -->
  <!-- vue3 template 标签内部可以随意些任何标签 -->
  <h1>22</h1>
  <h2>{{ a }}</h2>
  <h2>{{ str }}</h2>
  <h2>{{ flag }}</h2>
  <h2>{{ flag ? "男" : "女" }}</h2>
  <h2>{{ a > 18 ? "成年" : "未成年" }}</h2>

  <h1>姓名：{{ obj.name }} 年龄:{{ obj.age }}</h1>

  <h1>{{ arr[0] }}</h1>
  <h1>{{ arr[1] }}</h1>
  <!-- 数组和对象会自动 转为json字符串 -->
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
</template>
<script>
/* 
    插值语法：  {{数据-或者状态}} 
             {{变量}}
             {{式子}}
             {{三目}}
           
        哪些值

        数字
        字符串
        布尔值
        对象
        数组
*/

export default {
  data() {
    return {
      a: 1,
      str: "hello",
      flag: true,
      obj: {
        name: "张三",
        age: 18,
      },
      arr: [99, 88],
    };
  },
};
</script>
<style lang=""></style>
