const bcrypt = require('bcryptjs');

// Generate a hashed password
const generateHash = async () => {
  const password = 'test123';  // Password you want to hash
  const saltRounds = 10;  // Salt rounds for bcrypt

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('Hashed Password:', hashedPassword);  // Output the hashed password
};

generateHash();
