const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  exercises: [
    {
      name: String,
      type: String,
      sets: Number,
      reps: Number,
      weight: Number,
      duration: Number,
    },
  ],
});

module.exports = mongoose.model('Workout', workoutSchema);
