// 用来定义表的模型，实现和MongooDB数据库的映射

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

// 创建UserSchema
const userSchema = new Schema({
    UserId:ObjectId,
    // UserId:{type:OnjectId},
    userName:{unique:true,type:String},
    passWord:String,
    createAt:{type:Date,default:Date.now()},//注册时间
    ladtLoginAt:{type:Date,default:Date.now()}  //最后登录时间
});


// 发布模型
mongoose.model('User',userSchema);