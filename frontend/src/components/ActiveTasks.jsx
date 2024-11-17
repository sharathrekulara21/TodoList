import React from "react";

const ActiveTasks = ({ tasks, deleteTask, toggleTaskState }) => {
	return (
		<div className='overflow-x-auto'>
			<table className='rounded bg-white mt-4 max-auto shadow-lg'>
				<thead>
					<tr>
						<th className='px-4 py-2'>Time</th>
						<th className='px-4 py-2'>Task Assigned</th>
						<th className='px-4 py-2'>State</th>
						<th className='px-4 py-2'>Action</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((tas) => (
						<tr key={tas._id}>
							<td
								className={`border px-4 py-2 ${
									tas.state === "Completed" ? "line-through text-gray-500" : ""
								}`}
							>
								{tas.time}
							</td>
							<td
								className={`border px-4 py-2 ${
									tas.state === "Completed" ? "line-through text-gray-500" : ""
								}`}
							>
								{tas.task}
							</td>
							<td className='border px-4 py-2 '>
								<button
									onClick={() =>
										toggleTaskState(tas._id, {
											...tas,
											state:
												tas.state === "On going" ? "Completed" : "On going",
										})
									}
									className={`${
										tas.state === "On going"
											? "text-orange-500"
											: "text-green-500"
									} focus:outline-none`}
								>
									{tas.state}
								</button>
							</td>
							<td className='border px-4 py-2'>
								<button
									className='text-red-500 hover:text-red-700 px-4 py-2'
									onClick={(event) => deleteTask(tas._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export { ActiveTasks };
