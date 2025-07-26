// backend/routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.post('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.uid}, you're authenticated!` });
});

module.exports = router;
