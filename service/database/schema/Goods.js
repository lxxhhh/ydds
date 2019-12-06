const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const goodsSchema = new Schema({
    ID:{unique:true,type:String},
    NAME:String,
    ORI_PRICE:Number,
    PRESENT_PRICE:Number,
    IMAGE:String,
    createAt:{type:Date,default:Date.now()},//注册时间
},{
    collections:'Goods'
})

mongoose.model('Goods',goodsSchema)