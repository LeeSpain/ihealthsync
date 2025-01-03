const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Logging middleware
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth'); // Authentication routes
const adminRoutes = require('./routes/adminRoutes'); // Admin routes
const userRoutes = require('./routes/userRoutes'); // User routes

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev')); // Enable logging

// Serve static files (if needed, for deployment)
app.use(express.static(path.join(__dirname, 'public')));

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Mount routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/admin', adminRoutes); // Admin routes
app.use('/api/users', userRoutes); // User-specific routes

// Root route (welcome message)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the iHealthSync API' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Handle undefined routes (404 error)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
