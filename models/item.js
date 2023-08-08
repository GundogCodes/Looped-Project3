const {model, Schema}  = require('mongoose')

const itemSchema =  new Schema({
    name:{type:String},
    price:{type:Number},
    catagory:{type:String},
    itemID:{type:String},
    quantity:{type:Number, default:1}

})

const Item = model('Item', itemSchema)

module.exports = Item