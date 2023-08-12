const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items:[{type:mongoose.Schema.Types.ObjectId, ref:'Item'}],
    total:{type:Number},
    checkedOut:{type:Boolean, default:false}
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart