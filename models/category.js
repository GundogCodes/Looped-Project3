const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

Category = mongoose.model('Category', categorySchema);

module.exports = Category