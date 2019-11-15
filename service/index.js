const Koa = require('koa');
const app = new Koa();

const {connect , initSchemas} = require('./database/init.js');
const mongoose = require('mongoose');

// 解析post请求 koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body
const bodyParser = require('koa-bodyparser');

//解决跨域问题
const cors = require('koa2-cors');

// 路由插件
const Router = require('koa-router');
let user = require('./appApi/user.js');
let home = require('./appApi/home.js');

app.use(bodyParser());
app.use(cors());

// 装载所有子路由
let router = new Router();
router.use('/user',user.routes());
router.use('/home',home.routes());

// 加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

(async ()=> {
    await connect();
    initSchemas();
   

})()


// 由async标记的函数称为异步函数

// 每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数
// 对于任何请求，app都将调用异步函数处理请求

// 参数ctx是由koa传入的封装了request和response的变量，

// koa把很多async函数组成一个处理链，
// next是koa传入的将要处理的下一个由async标记的函数（异步函数）


// app.use(async(ctx,next) => {
//     ctx.body='<h1>Hello Koa1</h1>';
//     console.log('第一步')
//     await next();
//     console.log('第二步')

// });
app.use(async(ctx,next) => {
    ctx.body='<h1>Hello Koa2</h1>';
    console.log('第三步')
});

// setTimeout(() => {console.log('第四步');});

// 输出先后顺序为：第一步 第三步  第二步

app.listen(3000,()=>{
    console.log('[Server] 3000');
});