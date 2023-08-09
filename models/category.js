const  Schema =require('mongoose')

const categorySchema = new Schema({
    name:{type:String, required:true},
    sortOrder:{type:Number}
}, {
    timestamps:true
})

module.exports  = model('Category', categorySchema)

