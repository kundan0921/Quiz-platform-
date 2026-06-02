const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  name: String,

  score: Number,

  totalQuestions: Number,

  category: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Leaderboard",
  leaderboardSchema
);