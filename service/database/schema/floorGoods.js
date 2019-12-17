const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const floorSchema = new Schema({
    ID:{unique:true,type:String},
    floorName:String,
    IMAGE:String,
    createAt:{type:Date,default:Date.now()},//注册时间
},{
    collections:'floorGoods'
})

mongoose.model('floorGoods',floorSchema)