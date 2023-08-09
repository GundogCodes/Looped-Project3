const mongoose  = require('mongoose')

require('./category')

const itemSchema = require('./itemSchema')

const Item = model('Item', itemSchema)

module.exports = Item