const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const result = await Order.insertMany(data);
    res.status(201).json({ message: 'Orders added', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
