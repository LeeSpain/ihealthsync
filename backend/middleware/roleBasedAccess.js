const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware for role-based access control.
 * @param {string[]} allowedRoles - Array of roles allowed to access the route.
 * @returns {function} Middleware function for role validation.
 */
const roleBasedAccess = (allowedRoles) => {
  return (req, res, next) => {
    try {
      // Extract token from Authorization header
      const authHeader = req.header('Authorization');
      if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
      }

      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ error: 'Authentication token missing' });
      }

      // Verify and decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check if the user's role is allowed
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Access denied' });
      }

      // Proceed to the next middleware
      next();
    } catch (error) {
      console.error('Authorization error:', error.message);
      res.status(401).json({ error: 'Invalid or expired token' });
    }
  };
};

module.exports = roleBasedAccess;
