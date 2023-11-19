// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid token' });
    }

    // Attach the user information to the request object for use in subsequent middleware or routes
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
