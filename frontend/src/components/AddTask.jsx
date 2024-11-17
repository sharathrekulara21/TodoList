import React, { useState } from "react";

const AddTask = ({ tasks, addTask, setTasks }) => {
	const [newTask, setNewTask] = useState("");
	const [newTime, setNewTime] = useState("");
	const [newState, setNewState] = useState("On going");
	const [vision, setVision] = useState(false);

	const handleAddClick = () => {
		if (newTime && newTask && newState) {
			setTasks([...tasks, { time: newTime, task: newTask, state: newState }]);
			addTask({ time: newTime, task: newTask, state: newState });
			setNewTask("");
			setNewTime("");
			setNewState("On going");
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<button
				className='focus:outline-none mt-3 bg-gray-900 text-white px-4 py-2 rounded-lg'
				onClick={() => setVision(!vision)}
			>
				Add Task
			</button>
			{vision && (
				<>
					<div id='TaskAddition' className='mt-4 flex flex-col mx-auto'>
						<label className='mt-2'>Time:</label>
						<input
							type='text'
							value={newTime}
							onChange={(e) => setNewTime(e.target.value)}
							className='px-4 py-2 mx-auto mt-2 rounded focus:outline-none'
						/>
						<label className='mt-2'>Task:</label>
						<input
							type='text'
							value={newTask}
							onChange={(e) => setNewTask(e.target.value)}
							className='px-4 py-2 mx-auto mt-2 rounded focus:outline-none'
						/>
						<label className='mt-2'>State:</label>
						<select
							value={newState}
							onChange={(e) => setNewState(e.target.value)}
							className='rounded p-2'
						>
							<option value='On going'>On going</option>
							<option value='Completed'>Completed</option>
						</select>
					</div>
					<button
						onClick={handleAddClick}
						className='mt-3 bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none'
					>
						Save
					</button>
				</>
			)}
		</div>
	);
};

export { AddTask };
