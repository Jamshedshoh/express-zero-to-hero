const express = require('express');
const router = express.Router();

// Dummy task data
let tasks = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs", status: "Pending" },
    { id: 2, title: "Workout", description: "Go to the gym", status: "In Progress" }
];

// CREATE a new task
router.post('/', (req, res) => {
    const { title, description, status } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const newTask = { id: tasks.length + 1, title, description, status: status || "Pending" };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// READ all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// READ a single task by ID
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
});

// UPDATE a task
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    const { title, description, status } = req.body;
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;

    res.json(task);
});

// DELETE a task
router.delete('/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Task deleted" });
});

module.exports = router;
