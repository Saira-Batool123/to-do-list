const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const usersFile = "./users.json";
const tasksFile = "./tasks.json";

function readJSON(file) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Signup
app.post("/signup", (req, res) => {
  const users = readJSON(usersFile);
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }
  users.push({ username, password });
  writeJSON(usersFile, users);
  res.json({ success: true });
});

// Login
app.post("/login", (req, res) => {
  const users = readJSON(usersFile);
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ success: true });
});

// Tasks
app.get("/tasks/:username", (req, res) => {
  const tasks = readJSON(tasksFile).filter(t => t.username === req.params.username);
  res.json(tasks);
});
app.post("/tasks", (req, res) => {
  const tasks = readJSON(tasksFile);
  const { username, text } = req.body;
  const newTask = { id: Date.now(), username, text };
  tasks.push(newTask);
  writeJSON(tasksFile, tasks);
  res.json(newTask);
});
app.put("/tasks/:id", (req, res) => {
  let tasks = readJSON(tasksFile);
  tasks = tasks.map(t => t.id == req.params.id ? { ...t, text: req.body.text } : t);
  writeJSON(tasksFile, tasks);
  res.json({ success: true });
});
app.delete("/tasks/:id", (req, res) => {
  let tasks = readJSON(tasksFile);
  tasks = tasks.filter(t => t.id != req.params.id);
  writeJSON(tasksFile, tasks);
  res.json({ success: true });
});

app.listen(3000, () => console.log("Server at http://localhost:3000"));