import TaskList from './TasksList';

function SelectedProject({ currentProject, updateProject, onDeleteProject }) {
	const handleAddTask = (updatedTasks) => {
		let updatedProject = currentProject;
		currentProject.tasks = updatedTasks;
		updateProject(updatedProject);
	};
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
				<div className='flex items-center justify-between'>
					<p className='text-3xl font-bold'>{currentProject.title}</p>
					<button
						onClick={onDeleteProject}
						className='rounded-md p-1 text-red-500 bg-white border-red-400'>
						Delete
					</button>
				</div>

				<h2 className='font-bold'>Due Date</h2>
				<p>{formattedDate}</p>

				<h2 className='font-bold'>Description</h2>
				<p>{currentProject.description}</p>

				<h2 className='font-bold'>Tasks</h2>
			</header>
			<TaskList
				addTask={handleAddTask}
				tasklist={currentProject.tasks}></TaskList>
		</div>
	);
}

export default SelectedProject;
