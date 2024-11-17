const express = require("express");
const Task = require("../models/Task.js");
const router = express.Router();

// Post a task
router.post("/tasks", async (req, res) => {
	try {
		const task = new Task(req.body);
		await task.save();
		res.status(201).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get all tasks
router.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(201).json(tasks);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update a task
router.put("/tasks/:id", async (req, res) => {
	try {
		const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(201).json(updatedTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.status(201).json({ message: "Task deleted" });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
