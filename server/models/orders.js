const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  orderTime: {
    type: Date,
    default: new Date()
  },
  amount: {
    type: Number,
    required: true
  },
  shipTo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);