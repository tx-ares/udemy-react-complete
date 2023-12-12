import { useRef, useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';

function TaskList({ tasks, onAdd, onDelete }) {
	console.log(tasks, ' << task list');
	debugger;

	return (
		<section>
			<h2 className='font-bold mb-4'>Tasks</h2>

			<NewTask
				onAdd={onAdd}
				onDelete={onDelete}
			/>
			{tasks.length === 0 ? (
				<p>No tasks added yet.</p>
			) : (
				<ul className='p-4 mt-8 rounded-md bg-stone-100'>
					{tasks.map((task) => {
						return (
							<Task
								key={tasks.id}
								title={task.title}></Task>
						);
					})}
				</ul>
			)}
		</section>
	);
}

export default TaskList;
