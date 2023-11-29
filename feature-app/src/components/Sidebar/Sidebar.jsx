import ProjectList from './ProjectList';

function Sidebar({
	projectList,
	onStartAddProject,
	onSelectProject,
	selectedProjectId,
}) {
	return (
		<aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 flex-col rounded-r-xl'>
			<h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
				Your Projects
			</h2>
			<button
				className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
				onClick={onStartAddProject}>
				+ Add Project
			</button>
			<ProjectList
				projects={projectList}
				onSelectProject={onSelectProject}
				selectedProjectId={selectedProjectId}></ProjectList>
		</aside>
	);
}

export default Sidebar;
