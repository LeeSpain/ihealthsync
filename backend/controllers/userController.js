const User = require('../models/User');

const userController = {
    // Get user profile
    getUserProfile: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId).select('-password');
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update user
    updateUser: async (req, res) => {
        try {
            const { username, email } = req.body;
            const user = await User.findByIdAndUpdate(
                req.user.userId,
                { username, email },
                { new: true }
            ).select('-password');
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Update failed' });
        }
    },

    // Delete user
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user.userId);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Deletion failed' });
        }
    },

    // Add health data
    addHealthData: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId);
            user.healthData.push(req.body);
            await user.save();
            res.status(201).json(user.healthData[user.healthData.length - 1]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add health data' });
        }
    },

    // Get health data
    getHealthData: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId);
            res.json(user.healthData);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve health data' });
        }
    },

    // Update health data
    updateHealthData: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId);
            const dataIndex = user.healthData.findIndex(data => data._id.toString() === req.params.id);
            if (dataIndex === -1) return res.status(404).json({ error: 'Health data not found' });
            
            user.healthData[dataIndex] = { ...user.healthData[dataIndex], ...req.body };
            await user.save();
            res.json(user.healthData[dataIndex]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update health data' });
        }
    },

    // Delete health data
    deleteHealthData: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId);
            user.healthData = user.healthData.filter(data => data._id.toString() !== req.params.id);
            await user.save();
            res.json({ message: 'Health data deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete health data' });
        }
    }
};

module.exports = userController;