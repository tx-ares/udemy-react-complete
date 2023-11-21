import { useRef, useState } from 'react';
import Task from './Task';

function TaskList({ tasklist }) {
	console.log(tasklist, ' << task list');
	const [tasks, setTasks] = useState(tasklist);
	const newTask = useRef();

	const addTask = () => {
		console.log(newTask);
		debugger;
		// setTasks();
	};

	return (
		<div>
			<div className='add-tasks'>
				<form onSubmit={addTask}>
					<input
						ref={newTask}
						type='text'
					/>
					<button
						type='submit'
						className='text-gray-400 bg-gray-700 rounded-md p-1'
						onClick={addTask}>
						+ Add Task
					</button>
				</form>
			</div>

			{tasks.length > 0
				? tasks.map((value, index) => {
						return <Task key={index}>{value}</Task>;
				  })
				: ''}
		</div>
	);
}

export default TaskList;
