const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  day: { type: String, required: true },
  times: { type: String, required: true },
  reminder: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
