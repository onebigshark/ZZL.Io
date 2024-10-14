<script>
export default {
  data() {
    return {
      str: '你好',
      url:'https://img2.baidu.com/it/u=2302132635,1883238006&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800',
    };
  },
};
</script>

<template>
  <div class="a">{{ str }}</div>
  <img v-bind:src="url">
</template>

<style scoped>
.a {
  font-size: 30px;
}
img{
  width: 300px;
  height: 200px;
}
</style>