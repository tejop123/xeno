// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  totalSpent: Number,
  visitCount: Number,
  lastPurchaseDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
