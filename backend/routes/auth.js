const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify the token and authenticate the user
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(403).json({ error: 'Token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);  // Enhanced logging
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.userId = decoded.userId; // Save user ID to request for future use
    next(); // Proceed to the next middleware or route handler
  });
};

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        console.log('Register attempt for email:', email);

        // Validate input
        if (!username || !email || !password) {
            console.log('Registration failed: Missing required fields');
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            console.log('Registration failed: User already exists:', email);
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();  // Save the user to the database
        console.log('User registered successfully:', email);

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({ token });
    } catch (error) {
        console.error('Error during registration:', error); // Log the full error for debugging
        res.status(500).json({ error: 'Server error during registration', details: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Login attempt for:', email);

        // Validate input
        if (!email || !password) {
            console.log('Login failed: Missing required fields');
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Login failed: User not found:', email);
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Login failed: Password mismatch for user:', email);
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        console.log('User logged in successfully:', email);
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error); // Log the full error for debugging
        res.status(500).json({ error: 'Server error during login', details: error.message });
    }
});

// Profile Route - Only accessible with valid JWT token
router.get('/profile', verifyToken, async (req, res) => {
    try {
        // Find user by ID from the token
        const user = await User.findById(req.userId).select('-password'); // Exclude password from response
        
        if (!user) {
            console.log('Profile fetch failed: User not found for ID:', req.userId);
            return res.status(404).json({ error: 'User not found' });
        }

        console.log('User profile fetched successfully:', req.userId);
        res.status(200).json({ user });
    } catch (error) {
        console.error('Server error during profile fetch:', error); // Log error during profile fetch
        res.status(500).json({ error: 'Server error' });
    }
});

// Debug Route (optional, for testing)
router.get('/debug', (req, res) => {
    res.send('Auth routes are working!');
    console.log('Debug route hit');
});

module.exports = router;
