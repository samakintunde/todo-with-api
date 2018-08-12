const express = require("express");
const router = express.Router();
const db = require("../models/db");

// Getting the list of todos
router.get("/", (req, res) => {
  db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => {
      res.send(err);
    });
});

// Adding to the list of todos
router.post("/", (req, res) => {
  // Create a doc containing the request in the Todo model
  db.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err));
});

// Getting a specific todo
router.get("/:todoId", (req, res) => {
  db.Todo.findById(req.params.todoId).then(todo => res.json(todo));
});

module.exports = router;
