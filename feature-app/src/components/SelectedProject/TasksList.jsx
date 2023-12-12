import { useRef, useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';

function TaskList({ tasklist, onAdd, onDelete }) {
	console.log(tasklist, ' << task list');
	const newTask = useRef();

	// const createTask = (event) => {
	// 	event.preventDefault(); // Prevent default form submission

	// 	const taskValue = newTask.current.value.trim();
	// 	if (taskValue !== '') {
	// 		// Update tasks state with the new task
	// 		setTasks((prevTasks) => {
	// 			const updatedTasks = [...prevTasks, taskValue];

	// 			// Clear the input field
	// 			newTask.current.value = '';

	// 			addTask(updatedTasks);
	// 			return updatedTasks; // Update the state
	// 		});
	// 	}
	// };

	return (
		<div>
			<h2 className='font-bold mb-4'>Tasks</h2>

			<NewTask
				onAdd={onAdd}
				onDelete={onDelete}
			/>
			<p>No tasks added yet.</p>

			{/* {tasks.length > 0 ? (
				tasks.map((title, index) => {
					return (
						<Task
							key={index}
							title={title}></Task>
					);
				})
			) : (
				<p>No tasks added yet.</p>
			)} */}
		</div>
	);
}

export default TaskList;
