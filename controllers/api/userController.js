const User = require('../../models/user')
const Item = require('../../models/item')
const Cart = require('../../models/cart')

const bcrypt = require('bcrypt')
const { update } = require('immutable')
const jwt = require('jsonwebtoken')

exports.auth = async (req,res,next)=>{
    try {
        const token =  req.header('Authorization').replace('Bearer ','')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({_id: data._id})
        if(!user){
            res.json({message:`INVALID CREDENTIALS - PLEASE :OGIN`})
        }
        req.user = user
        next()

    } catch (error) {
        res.status(401).json({message: error.message})
    }
}


exports.loginUser = async (req,res,next)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user || !await bcrypt.compare(req.body.password, user.password)){
            res.json({message:'INVALID CREDENTIALS'})
        } else{
            const token = await user.generateAuthToken()
            res.json({user:'User Logged In', token:token})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.createUser = async (req,res,next)=>{
    try {
        const newUser = await User.create(req.body)
        await newUser.save()
        res.json({newUser:newUser})
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateUser = async (req,res,next) =>{
    try {
        if(req.user.id !== req.params.if){
            res.json('INVALID CREDENTIALS =  PLEASE LOGIN')
        } else if (req.user.id === req.params.id){
            const updatedUser = await User.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
            res.json({userUpdates:updatedUser})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.deleteUser = async (req,res,next)=>{
    try {
        if(req.user.id !== req.params.id){
            res.json('INVALID CREDENTIALS - PLEASE LOGIN')
        } else if(req.user.id === req.params.id){

            await User.findOneAndDelete({'_id':req.params.id})
            res.json({message:'User Deleted',goToProfile:`yourProfile/users/${user.id}`})
        }
        next()
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.showAUser =  async (req,res,next)=>{
    try {
        const user = await User.findOne({'_id':req.params.id})
        console.log('rpi',req.params.id)
        console.log('rui',req.user.id)
        if(req.user.id=== req.params.id){
            res.json({user:user.username,id:user.id,email:user.email,posts:user.posts,friends:user.friends,chats:user.chats})
        } else if(req.params.id !== req.user.id){
            res.json({user:user.username,id:user.id,posts:user.posts})
        }
        next()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



exports.seeUserCart = async (req,res)=>{
    try {
        
        const userCart  = await User.findOne({_id:req.user.id}).populate('cart')
        res.json(userCart)
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

exports.clearCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.addItemToCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.deleteItemInCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.updateItemInCart = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}