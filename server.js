const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customer.routes'); // correct path
const app = express();

app.use(express.json()); // allow JSON body parsing

// Connect to MongoDB
mongoose.connect('your-mongo-uri', { dbName: 'xeno' })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// Use routes
app.use('/api', customerRoutes); // mounts /api/customers

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
