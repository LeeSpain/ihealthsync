const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ error: 'Please authenticate' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (e) {
            res.status(401).json({ error: 'Token is not valid' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error in auth middleware' });
    }
};

module.exports = auth;