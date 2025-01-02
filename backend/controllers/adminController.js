// adminController.js
const User = require('../models/User');
const Service = require('../models/Service');

const adminController = {
  // Fetch all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  // Update user details
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  // Manage services
  getAllServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch services' });
    }
  },

  addService: async (req, res) => {
    try {
      const newService = new Service(req.body);
      await newService.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add service' });
    }
  },

  updateService: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedService = await Service.findByIdAndUpdate(id, updates, { new: true });

      if (!updatedService) {
        return res.status(404).json({ error: 'Service not found' });
      }

      res.json(updatedService);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update service' });
    }
  },

  deleteService: async (req, res) => {
    try {
      const { id } = req.params;
      await Service.findByIdAndDelete(id);
      res.json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete service' });
    }
  },

  // Get platform settings (example)
  getSettings: (req, res) => {
    try {
      const settings = {
        platformName: 'iHealthSync',
        version: '1.0.0',
        supportEmail: 'support@ihealthsync.com'
      };
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch settings' });
    }
  }
};

module.exports = adminController;