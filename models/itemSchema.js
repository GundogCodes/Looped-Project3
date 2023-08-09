const item =  require('./item')
const Schema  = require('mongoose').Schema

const itemSchema =  new Schema({
    name:{type:String, required:true},
    emoji:{type:String},
    price:{type:Number, required:true, default:0},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    itemID:{type:String},
    quantity:{type:Number, default:1}

}, {
    timestamps:true
})

module.exports = itemSchema