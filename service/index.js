const Koa = require('koa');
const app = new Koa();
const {connect , initSchemas} = require('./database/init.js');
const mongoose = require('mongoose');


(async ()=> {
    await connect();
    initSchemas();
    const User = mongoose.model('User');
    let oneUser = new User({userName:'lxx',passWord:'123456.'});
    oneUser.save().then(() => {
        console.log('success');
    });

    let  users = await User.findOne({}).exec();

console.log('------------------');
console.log(users);
console.log('------------------');

})()


// 由async标记的函数称为异步函数

// 每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数
// 对于任何请求，app都将调用异步函数处理请求

// 参数ctx是由koa传入的封装了request和response的变量，

// koa把很多async函数组成一个处理链，
// next是koa传入的将要处理的下一个由async标记的函数（异步函数）


app.use(async(ctx,next) => {
    ctx.body='<h1>Hello Koa1</h1>';
    console.log('第一步')
    await next();
    console.log('第二步')

});
app.use(async(ctx,next) => {
    ctx.body='<h1>Hello Koa2</h1>';
    console.log('第三步')
});

setTimeout(() => {console.log('第四步');});

// 输出先后顺序为：第一步 第三步  第二步

app.listen(3000,()=>{
    console.log('[Server] 3000');
});