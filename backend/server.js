const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/auth');  // Ensure this path is correct

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Mount routes under /api/auth
app.use('/api/auth', authRoutes);  // Make sure this is mounted correctly

// Handle undefined routes (404 error)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
