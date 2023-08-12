const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);