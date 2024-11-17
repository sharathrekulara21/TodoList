import React, { useEffect, useState } from "react";
// import { Login } from "./components/Login.jsx";
import { ActiveTasks } from "./components/ActiveTasks.jsx";
import { AddTask } from "./components/AddTask.jsx";
import axios from "axios";

// Styles
import "./tailwind.output.css";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const API_URL = "https://todolist-1-nqf2.onrender.com/api/tasks";

	const fetchTasks = async () => {
		const response = await axios.get(API_URL);
		setTasks(response.data);
	};

	const addTask = async (task) => {
		const response = await axios.post(API_URL, task);
		setTasks([...tasks, response.data]);
	};

	const deleteTask = async (id) => {
		await axios.delete(`${API_URL}/${id}`);
		setTasks(tasks.filter((task) => task._id !== id));
	};

	const toggleTaskState = async (id, updatedTask) => {
		const response = await axios.put(`${API_URL}/${id}`, updatedTask);
		setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<>
			<div className='flex min-h-screen justify-center items-center flex-col bg-gray-500'>
				<h1 className='font-bold text-4xl'>Todo List</h1>
				<ActiveTasks
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTaskState={toggleTaskState}
				/>
				<AddTask tasks={tasks} addTask={addTask} setTasks={setTasks} />
				{/* <Login
          signIn={signIn}
          setSignIn={setSignIn}
          loginDetails={loginDetails}
          setLoginDetails={setLoginDetails}
        /> */}
			</div>
		</>
	);
};

export default App;
