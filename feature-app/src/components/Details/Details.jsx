import TaskList from './TasksList';

function Details({ currentProject, updateProject }) {
	const handleAddTask = (updatedTasks) => {
		let updatedProject = currentProject;
		currentProject.tasks = updatedTasks;
		updateProject(updatedProject);
	};
	return (
		<div
			id='details'
			className='flex-col'>
			<h2 className='font-bold'>Project Name</h2>
			<p>{currentProject.title}</p>

			<h2 className='font-bold'>Due Date</h2>
			<p>{currentProject.date}</p>

			<h2 className='font-bold'>Description</h2>
			<p>{currentProject.description}</p>

			<h2 className='font-bold'>Tasks</h2>
			<TaskList
				addTask={handleAddTask}
				tasklist={currentProject.tasks}></TaskList>
		</div>
	);
}

export default Details;
