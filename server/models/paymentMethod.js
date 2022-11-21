const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('payment', paymentSchema);