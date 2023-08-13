const express = require('express')
//const ensureLoggedIn = require('./config/ensureLoggedIn')
const app = express()

const path = require('path')

const favicon = require('serve-favicon') // shows emojis in the browser tab

const logger = require('morgan')
const userRoutes = require('./routes/api/users')
const itemRoutes = require('./routes/api/items')
const orderRoutes = require('./routes/api/orders')

app.use(express.json())


app.use((req,res,next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public','img', 'logo.png')))
app.use(express.static(path.join(__dirname, 'public'))) 

app.use('/api/users', userRoutes )
app.use('/api/items' , itemRoutes )
app.use('/api/orders', orderRoutes)

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})// catch all for wrong routes
module.exports = app
