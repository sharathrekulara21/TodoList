const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	time: {
		type: String,
		required: true,
	},
	task: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		enum: ["On going", "Completed"],
		default: "On going",
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "User",
	// 	required: true,
	// },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
