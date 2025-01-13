const express = require('express');
const userController = require('../controllers/userController'); // Ensure this file exists
const roleBasedAccess = require('../middleware/roleBasedAccess');
const router = express.Router();

// User routes
router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUser);
router.delete('/profile', userController.deleteUser);

module.exports = router;
