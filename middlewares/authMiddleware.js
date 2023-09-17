const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT token
const authenticate = (req, res, next) => 
{ const token = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.currentUser = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// Middleware to authorize user role as admin
const authorizeAdmin = (req, res, next) => {
  if (!req.currentUser.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  next();
};

module.exports = { authenticate, authorizeAdmin };
