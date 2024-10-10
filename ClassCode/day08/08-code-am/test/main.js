//require nodejs提供的模块化开发语法
//引入lodash模块，放入_变量
/* 
    使用第三方库--》 使用之前必须下载到本地 npm i lodash 
    本地安装-局部安装

    npm i 模块名 (默认会被安装信息写入到package.json 文件中 的 dependencies --依赖，这种依赖叫项目依赖- 实际写代码会用到的第三方库叫项目依赖 )
    npm i lodash
    npm i axios

    本地安装还有一种依赖，叫开发依赖   
    npm i 模块名 -D   （dev）
    nodemon 是一个自动执行js文件的工具
    nodemon 可以全局安装，也可以局部安装
    全局安装--nodemon当命令使用  nodemon js文件， 监听文件的变化，自动重新执行 node js文件

    npm i nodemon -D  （局部安装会把安装记录 写到package.json文件中devDependencies 配置，开发依赖--一般当做工具使用--自动重启--自动编译sass-压缩js）

    一般工具--会在 packagejson 文件中的script 配置中使用（npm脚本 ）
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "脚本名": "要执行的代码--命令"，
            "dev": "nodemon main.js",
            "start": "node main.js"
        }

        想要执行脚本 可以终端中输入框  npm run 脚本名--就会执行对用的脚步后面的命令
        npm run dev
        npm run start  --> npm start 
        除了start可以省略run，其他都不能省
*/
// require(模块名)
let _ = require("lodash");
let axios = require("axios");
let obj = { name: "zhangsan" };
let obj2 = _.clone(obj);
console.log(obj2);
// axios.get(url)
console.log(1);
console.log(1);
console.log(2);
console.log(2);
