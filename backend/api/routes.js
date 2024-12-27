// backend/api/routes.js

const express = require('express');
const { loginUser } = require('../controller/userController'); // Corrected path

const router = express.Router();

// Define the login route
router.post('/login', loginUser);

module.exports = router;
