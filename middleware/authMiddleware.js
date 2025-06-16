import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, username }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// add this to any route you want to protect:

// import { protect } from '../middleware/authMiddleware.js';
// router.get('/profile', protect, (req, res) => {
//   res.json({ message: `Hello ${req.user.username}!` });
// });