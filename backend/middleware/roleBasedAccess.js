// roleBasedAccess.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware for role-based access control
const roleBasedAccess = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        return res.status(401).json({ error: 'Authentication token missing' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Access denied' });
      }

      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid or expired token' });
    }
  };
};

module.exports = roleBasedAccess;
