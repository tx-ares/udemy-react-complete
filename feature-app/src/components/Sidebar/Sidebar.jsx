import ProjectList from './ProjectList';

function Sidebar(props) {
	return (
		<div className='flex-col bg-gray-500'>
			<h1 className='text-gray-400'>Your Projects</h1>
			<button
				className='text-gray-400 bg-gray-700 rounded-md p-1'
				onClick={props.showCreateForm}>
				+ Add Project
			</button>
			<ProjectList
				projects={props.projectList}
				showDetails={props.showDetails}></ProjectList>
		</div>
	);
}

export default Sidebar;
