// 用来定义表的模型，实现和MongooDB数据库的映射

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

//加密
const bcrypt = require('bcrypt'); 

// 设置加密的字符
const SALT_WORK_FACTOR = 10;

// 创建UserSchema
const userSchema = new Schema({
    UserId:ObjectId,  //固定写法
    //或者 UserId:{type:ObjectId},
    userName:{unique:true,type:String}, //设置用户名的唯一性
    passWord:String,
    createAt:{type:Date,default:Date.now()},//注册时间
    ladtLoginAt:{type:Date,default:Date.now()}  //最后登录时间
});

// 数据存储之前加盐加密
userSchema.pre('save',function(next){
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.passWord,salt,(err,hash)=>{
            if(err) return next(err);
            this.passWord = hash;
            next();
        })
    });
});

userSchema.methods = {
    //密码校验  客户端密码_passsWord,，一个是数据库取出来的密码paassWord
    comparePassword:(_passWord,passWord)=>{
        return new Promise((resolve,reject) => {
            //bcrypt的compare方法校验
            bcrypt.compare(_passWord,passWord,(err,isMatch)=>{
                console.log(err);
                console.log(isMatch);
                if(isMatch == true) {resolve(isMatch);}
                else {reject(err);}
            });
        })
    }
}
// 发布模型
mongoose.model('User',userSchema);