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
			<div className='flex items-center gap-4 mb-4'>
				<form onSubmit={createTask}>
					<input
						className='w-64 px-2 py-1 rounded-sm bg-stone-200 mr-4'
						ref={newTask}
						type='text'
					/>
					<button
						type='submit'
						className='text-stone-700 hover:text-stone-950'>
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
				<p>No tasks added yet.</p>
			)}
		</div>
	);
}

export default TaskList;
