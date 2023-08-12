const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const itemSchema = require('./itemSchema');

const Item = mongoose.model('Item', itemSchema);

module.exports = Item