const mongoose = require('mongoose');
const db  = "mongodb://localhost/ydds-db";

exports.connect = () => {

    // 连接数据库
    mongoose.connect(db);
 //   return new Promise()

    // 数据库监听事件
    mongoose.connection.on('disconnected',()=>{
        console.log('*******************数据库连接失败');
        mongoose.connect(db);
    });

    mongoose.connection.on('error',()=>{
        console.log('*******************数据库连接出错');
        mongoose.connect(db);
    });

    mongoose.connection.once('open',()=>{
        console.log('*******************数据库连接');

    });
}