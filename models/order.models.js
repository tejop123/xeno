const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerEmail: String,
  orderAmount: Number,
  orderDate: Date,
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
