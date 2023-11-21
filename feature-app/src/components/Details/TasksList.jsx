import { useRef, useState } from 'react';
import Task from './Task';

function TaskList({ tasklist, addTask }) {
	console.log(tasklist, ' << task list');
	const [tasks, setTasks] = useState(tasklist);
	const newTask = useRef();

	const createTask = (event) => {
		event.preventDefault(); // Prevent default form submission

		const taskValue = newTask.current.value.trim();
		if (taskValue !== '') {
			// Update tasks state with the new task
			setTasks((prevTasks) => {
				const updatedTasks = [...prevTasks, taskValue];

				// Clear the input field
				newTask.current.value = '';

				addTask(updatedTasks);
				return updatedTasks; // Update the state
			});
		}
	};

	return (
		<div>
			<div className='add-tasks'>
				<form onSubmit={createTask}>
					<input
						ref={newTask}
						type='text'
					/>
					<button
						type='submit'
						className='text-gray-400 bg-gray-700 rounded-md p-1'>
						+ Add Task
					</button>
				</form>
			</div>

			{tasks.length > 0 ? (
				tasks.map((title, index) => {
					return (
						<Task
							key={index}
							title={title}></Task>
					);
				})
			) : (
				<p>No tasks available.</p>
			)}
		</div>
	);
}

export default TaskList;
