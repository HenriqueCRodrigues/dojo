const mongoose = require('../config/db');

const Product = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    integer: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', Product);