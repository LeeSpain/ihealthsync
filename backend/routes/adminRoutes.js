const express = require('express');
const adminController = require('../controllers/adminController');
const roleBasedAccess = require('../middleware/roleBasedAccess'); // Assuming this middleware is defined
const router = express.Router();

router.get('/users', roleBasedAccess(['admin']), adminController.getAllUsers);
router.put('/users/:id', roleBasedAccess(['admin']), adminController.updateUser);
router.delete('/users/:id', roleBasedAccess(['admin']), adminController.deleteUser);

router.get('/services', roleBasedAccess(['admin']), adminController.getAllServices);
router.post('/services', roleBasedAccess(['admin']), adminController.addService);
router.put('/services/:id', roleBasedAccess(['admin']), adminController.updateService);
router.delete('/services/:id', roleBasedAccess(['admin']), adminController.deleteService);

router.get('/settings', roleBasedAccess(['admin']), adminController.getSettings);

module.exports = router;
