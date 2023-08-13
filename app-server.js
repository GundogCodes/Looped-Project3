const express = require('express')

require('./config/database');
const app = express()

const path = require('path')

const favicon = require('serve-favicon')
const logger = require('morgan')

app.use(express.json())

const userRoutes = require('./routes/api/users')
const itemRoutes = require('./routes/api/items')
const orderRoutes = require('./routes/api/orders')

app.use((req,res,next)=>{
    res.locals.data = {}
    next() 
})


app.use(logger('dev'))

app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./config/checkToken'))
const ensureLoggedIn = require('./config/ensureLoggedIn')

app.use('/api/users', userRoutes )
app.use('/api/items', ensureLoggedIn, itemRoutes )
app.use('/api/orders',ensureLoggedIn, orderRoutes)


app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app