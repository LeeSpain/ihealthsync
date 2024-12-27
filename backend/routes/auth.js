const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Ensure the User model is correct
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password were provided in the request
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with hashed password in database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET,  // Ensure this is set in your environment variables
      { expiresIn: '1h' }  // Token expires in 1 hour
    );

    // Send response with the token
    res.json({ 
      message: 'Login successful', 
      token 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
