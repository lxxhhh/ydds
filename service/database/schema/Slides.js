const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const slidesSchema = new Schema({
    ID:{unique:true,type:String},
    IMAGE:String,
    createAt:{type:Date,default:Date.now()},//注册时间
})

mongoose.model('Slides',slidesSchema)