const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todo-routes");

const app = express();

app.get("/", (req, res) => res.send("Hello from server.js"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todos", todoRoutes);

// Listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is started on port ${PORT}`));
