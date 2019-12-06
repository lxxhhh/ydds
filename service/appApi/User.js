const Router = require('koa-router');
const mongoose = require('mongoose');

let router = new Router();
router.get('/',async(ctx) => {
     ctx.body = '这是用户操作首页';
});
router.post('/register',async(ctx) => {
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    await newUser.save().then(() => {
        ctx.body = {
            code:200,
            message:'注册成功'
        }
    }).catch(error => {
        ctx.body = {
            code:500,
            message:error
        }
    })
});

router.post('/login',async(ctx) => {
    //获取前端传递过来的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let passWord = loginUser.passWord;

    // 引入User的model
    const User = mongoose.model('User');
    // 在数据库中查找用户名是否存在，如果存在则开始校验密码
    await User.findOne({userName:userName}).exec()
    .then(async(result) => {
        console.log(result);
        if(result){
            // 开始校验密码
            let newUser = new User();
            await newUser.comparePassword(passWord,result.passWord)
            .then((isMatch)=>{
                // 返回对比结果
                ctx.body = {
                    code:200,
                    message:isMatch
                }
            })
            .catch(error=>{
                //出现异常，返回异常
                ctx.body={ code:500, message:error}
            })
        }else{
            ctx.body={ code:404, message:'用户名不存在'}
        }
    })
    .catch(error=>{
        console.log(error)
        ctx.body={ code:500, message:error  }
    })
})

module.exports = router;