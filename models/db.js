const mongoose = require("mongoose");

// Connect Mongoose to MongoDB
mongoose.connect(
  "mongodb://localhost:27017/todo-with-api",
  { useNewUrlParser: true }
);

// Set Mongoose to use promises
mongoose.Promise = Promise;

// Export todo model
module.exports.Todo = require("./todo");
