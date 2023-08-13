const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history
}

async function cart(req,res, next){
    try {
        console.log('req.user',req.user)
        const cart = await Order.getCart(req.user.id)
        res.status(200).json(cart)
        next()
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

async function addToCart(req,res, next){
    try {
        const cart = await Order.getCart(req.user._id)
        next()
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

async function setItemQtyInCart(req,res, next){
    try {
        const cart = await Order.getCart(req.user._id)
        await cart.setItemQty(req.body.itemId, req.body.newQty)
        res.status(200).json(cart)
        next()
    } catch (error) {
        res.status(400).json({msg:error.message})
        
    }
}

async function checkout(req,res, next){
    try {
        const cart = await Order.getCart(req.user._id)
        cart.isPaid = true
        await cart.save()
        res.status(200).json(cart)
        next()
    } catch (error) {
        
        res.status(400).json({msg:error.message})
    }
}

async function history(req,res, next){
    try {
        const orders =  await Order.find({user:req.user._id, isPaid:true}).sort('-updatedAt').exec()
        res.status(200).json(orders)
        next()
    } catch (error) {
        res.status(400).json({msg:error.message})
        
    }
}