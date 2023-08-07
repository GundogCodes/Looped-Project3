const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongoose connection ${db.name} is lit at ${db.host}`)
})