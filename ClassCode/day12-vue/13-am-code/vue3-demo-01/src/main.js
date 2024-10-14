// ----App.vue也叫项目--根组件
// main.js里面的代码一般不需要修改，后面需要添加代码（把根组件的代码显示到id为app的div中）

// 引入css--（css文件当做模块直接引入--全局css）
import "./assets/main.css";

//引入vue模块中 createApp函数
// createApp 用来创建vue实例的
import { createApp } from "vue";

// 引入App.vue文件
// ---一个vue文件就是一个vue组件
// 一个vue组件--包含了html+css+js
//  目前app.vue就是一个页面
import App from "./App.vue";

// 创建一个vue实例，
// let app = createApp({});
let app = createApp(App);
// 把app实例-挂载到 index。html页面中 的 id为app的div中
app.mount("#app");
