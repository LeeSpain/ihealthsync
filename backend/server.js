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

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON payloads
app.use(bodyParser.json()); // Additional body parser for extended payloads
app.use(morgan('dev')); // Enable request logging in development mode

// Serve static files (e.g., for frontend build or public assets)
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
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

// Root route for welcome message
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the iHealthSync API' });
});

// Health check endpoint for monitoring server status
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Handle undefined routes (404 errors)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler for internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
