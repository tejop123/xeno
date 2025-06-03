const express = require('express');
const router = express.Router();

// GET customers - example list response
router.get('/customers', (req, res) => {
  res.json([{ name: "Tejasv", email: "john@example.com" }]);
});

// POST customers - create new customer
router.post('/customers', (req, res) => {
  // normally you'd save to DB here
  const customer = req.body;
  res.status(201).json({ message: "Customer created", customer });
});

module.exports = router;
