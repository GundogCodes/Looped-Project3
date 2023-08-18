const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
})

module.exports = itemSchema
