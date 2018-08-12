const mongoose = require("mongoose");

// Create Schema
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: "Task can not be blank"
  },
  done: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// Create Todo model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
