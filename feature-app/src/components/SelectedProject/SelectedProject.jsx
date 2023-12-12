import TaskList from './TasksList';

function SelectedProject({
	currentProject,
	onDeleteProject,
	onAddTask,
	onDeleteTask,
	tasks,
}) {
	const formattedDate = new Date(currentProject.date).toLocaleDateString(
		'en-US',
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}
	);
	return (
		<div className='w-[35rem] mt-16'>
			<header className='pb-4 mb-4 border-b-2 border-stone-300'>
				<div className='flex items-center justify-between mb-4'>
					<p className='text-3xl font-bold'>{currentProject.title}</p>
					<button
						onClick={onDeleteProject}
						className='rounded-md p-1 text-red-500 bg-white border-red-400'>
						Delete
					</button>
				</div>
				<div className=' mb-4'>
					<h2 className='font-bold'>Due Date</h2>
					<p>{formattedDate}</p>
				</div>

				<h2 className='font-bold'>Description</h2>
				<p>{currentProject.description}</p>
			</header>
			<TaskList
				onAdd={onAddTask}
				onDelete={onDeleteTask}
				tasks={tasks}></TaskList>
		</div>
	);
}

export default SelectedProject;
