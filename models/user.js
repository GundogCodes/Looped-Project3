const {model, Schema, default: mongoose} = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { use } = require('browser-sync')


const userSchema = new Schema({
    username:{type:String, required:true, unique:true},
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minLength:3,
    }
        },{
            timestamps:true,
            toJSON:{
                transform: function(doc,ret){
                    delete ret.password
                    return ret
                }
        },
    password:{type:String, required:true},
    cart:{type:Schema.Types.ObjectId, ref:'Cart'},
    orderHistory:[{type:Schema.Types.ObjectId, ref:'Item'}]

},{
    timestamps:true
})

userSchema.pre('save', async function(next){
    this.isModified('password')?
    this.password = await bcrypt.hash(this.password,8):
    null
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id:this.id}, process.env.SECRET)
    return token
}

const User = model('User',userSchema)

module.exports = User