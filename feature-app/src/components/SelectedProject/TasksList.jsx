import NewTask from './NewTask';

function TaskList({ tasks, onAdd, onDelete }) {
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
							<li
								key={task.id}
								className='flex justify-between my-4'>
								<span>{task.title}</span>
								<button
									onClick={() => onDelete(task.id)}
									className='text-stone-700 hover:text-red-500'>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}

export default TaskList;
