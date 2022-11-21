const mongoose = require('mongoose');
const userTypeEnum = require('./Enums/userTypeEnum');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "order"
  }],
//   payment: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "payment"
//   }],
  image: {
    type: String,
    required: false
  },
  userType: {
    type: String,
    enum: userTypeEnum,
    default: userTypeEnum.customer
  }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);