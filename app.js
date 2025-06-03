const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;  // Make sure to add this in your .env file

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Xeno Mini CRM Backend is running');
});

// Import and use your routes here
// const customerRoutes = require('./routes/customer.routes');
// app.use('/api/customers', customerRoutes);

module.exports = app;
