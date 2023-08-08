
const {model,Schema} = require('mongoose')

const cartSchema = new Schema({
    items:[{type:Schema.Types.ObjectId, ref:'Item'}],
    total:{type:Number},
    checkedOut:{type:Boolean, default:false}
})

const Cart = model('Cart', cartSchema)

module.exports = Cart