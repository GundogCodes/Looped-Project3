const { Toast } = require('bootstrap')
const {model,Schema} = require('mongoose')

const cartSchema = new Schema({
    items:[{type:Schema.Types.ObjectId, ref:'Item'}],
    owner:{type:Schema.Types.ObjectId, ref:'User'},
    total:{type:Number},
    checkedOut:{type:Boolean, default:false}
})

const Cart = model('Cart', cartSchema)

module.exports = Cart