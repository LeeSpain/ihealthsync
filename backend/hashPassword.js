const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');  // Make sure the path is correct to your User model

// Connect to the database
mongoose.connect('mongodb://localhost:27017/ihealthsync', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to the database');

    // Find the user
    const user = await User.findOne({ email: 'testuser@example.com' });

    if (user) {
      // Hash the password
      const hashedPassword = await bcrypt.hash('password123', 10);

      // Update the password
      user.password = hashedPassword;

      // Save the user with the hashed password
      await user.save();
      console.log('Password hashed and saved');
    } else {
      console.log('User not found');
    }

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error:', err);
  });
