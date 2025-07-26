// backend/routes/workouts.js
const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const verifyToken = require('../middleware/verifyToken');

// Create workout log
router.post('/', verifyToken, async (req, res) => {
  try {
    const workout = new Workout({
      userId: req.user.uid,
      ...req.body,
    });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all logs for user
router.get('/', verifyToken, async (req, res) => {
  try {
    const logs = await Workout.find({ userId: req.user.uid });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
