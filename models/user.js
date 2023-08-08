const {model, Schema} = require('mongoose')
const bcrypt = requie('bcrypt')
const jwt = require('jsonwebtoken')
const { use } = require('browser-sync')


const userSchema = new Schema({
    username:{type:String, require:true, unique:true},
    email:{type:String, require:true, unique:true},
    password:{type:String}
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