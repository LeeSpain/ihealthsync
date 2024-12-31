const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// Protected routes
router.get('/user/profile', auth, userController.getUserProfile);
router.put('/user/update', auth, userController.updateUser);
router.delete('/user/delete', auth, userController.deleteUser);

// Health data routes
router.post('/health/data', auth, userController.addHealthData);
router.get('/health/data', auth, userController.getHealthData);
router.put('/health/data/:id', auth, userController.updateHealthData);
router.delete('/health/data/:id', auth, userController.deleteHealthData);

module.exports = router;