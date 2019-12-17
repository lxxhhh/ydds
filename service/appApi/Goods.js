const Koa = require('koa')
const app = new Koa()
const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')    //自带的读取文件信息


// 热卖商品

// 从json里面读取数据插入到数据库
router.get('/insertAllGoodsInfo',async(ctx)=>{
   
     fs.readFile('./goods.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Goods = mongoose.model('Goods')
        data.Goods.map((value,index)=>{
            console.log(value)
            let newGoods = new Goods(value)
            newGoods.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })
       
        
    })
    ctx.body="开始导入数据"
})

//从数据库中获取热卖商品的所有信息/根据ID获取信息
router.post('/getDetailGoodsInfo',async(ctx) => {
    try {
        let goodsId = ctx.request.body.goodsId
        const Goods = mongoose.model('Goods')
        let result = goodsId ? await Goods.findOne({ID:goodsId}).exec() : await Goods.find({}).exec()
        // let result=await Goods.findOne({ID:goodsId}).exec()  //获取符合条件的第一个数据
        // let result=await Goods.find({}).exec()  //获取所有符合条件的数据
        ctx.body = {
            code:200,
            message:result
        }
    } catch (error) {
        ctx.body={code:500,message:error}
    }
})



// 轮播商品
// 从json里面读取数据插入到数据库
router.get('/insertAllSlidesInfo',async(ctx)=>{
   
     fs.readFile('./slides.json','utf8',(err,data)=>{
        data=JSON.parse(data)   //解析对象
        let saveCount=0
        const Slides = mongoose.model('Slides')
        data.slides.map((value,index)=>{
            let newSlides = new Slides(value)
            newSlides.save().then(()=>{
                saveCount++
                console.log('成功'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })
       
        
    })
    ctx.body="开始导入数据"
})


//从数据库中获取轮播商品的所有信息
router.post('/getSlidesInfo',async(ctx) => {
    try {
        const Slides = mongoose.model('Slides')
        let result = await Slides.find({}).exec()
        ctx.body = {
            code:200,
            message:result
        }
    } catch (error) {
        ctx.body={code:500,message:error}
    }
})

// 楼层商品
// 从json里面读取数据插入到数据库
router.get('/insertfloorGoodsInfo',async(ctx)=>{
   
    fs.readFile('./floor.json','utf8',(err,data)=>{
       data=JSON.parse(data)   //解析对象
       let saveCount=0
       const floorGoods = mongoose.model('floorGoods')
       data.floor.map((value,index)=>{
           let newfloorGoods = new floorGoods(value)
           newfloorGoods.save().then(()=>{
               saveCount++
               console.log('成功'+saveCount)
           }).catch(error=>{
                console.log('失败：'+error)
           })
       })
   })
   ctx.body="开始导入数据"
})

//从数据库中获取楼层商品的所有信息
router.post('/getfloorGoodsInfo',async(ctx) => {
    try {
        const floorGoods = mongoose.model('floorGoods')
        let result = await floorGoods.find({}).exec()
        ctx.body = {
            code:200,
            message:result
        }
    } catch (error) {
        ctx.body={code:500,message:error}
    }
})


module.exports=router;