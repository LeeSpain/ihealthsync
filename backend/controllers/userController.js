const User = require('../models/User');

const userController = {
    // Existing methods remain the same

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

    // Get user role
    getUserRole: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId).select('role');
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json({ role: user.role });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Reset user password
    resetPassword: async (req, res) => {
        try {
            const { newPassword } = req.body;
            const user = await User.findById(req.user.userId);
            if (!user) return res.status(404).json({ error: 'User not found' });

            // Replace with your password hashing logic
            user.password = newPassword;
            await user.save();
            res.json({ message: 'Password updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Password reset failed' });
        }
    },

    // Search users
    searchUsers: async (req, res) => {
        try {
            const { query } = req.query;
            const users = await User.find({
                $or: [
                    { username: { $regex: query, $options: 'i' } },
                    { email: { $regex: query, $options: 'i' } }
                ]
            }).select('-password');
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Search failed' });
        }
    },

    // Paginated list of users
    listUsers: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const users = await User.find()
                .skip((page - 1) * limit)
                .limit(parseInt(limit))
                .select('-password');
            const total = await User.countDocuments();
            res.json({ users, total, page: parseInt(page), limit: parseInt(limit) });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    },

    // Deactivate user
    deactivateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                { active: false },
                { new: true }
            ).select('-password');
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json({ message: 'User deactivated successfully', user });
        } catch (error) {
            res.status(500).json({ error: 'Deactivation failed' });
        }
    }
};

module.exports = userController;
