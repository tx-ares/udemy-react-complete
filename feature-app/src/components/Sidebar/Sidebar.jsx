import { useState } from 'react';
import ProjectList from './ProjectList';
import CreateProject from '../Tasks/CreateProject';

function Sidebar() {
	const [projectList, setProjectList] = useState([]);
	const [showCreateForm, setShowCreateForm] = useState(false);

	function addProject() {
		console.log('added project');
		setShowCreateForm(true);
	}

	return (
		<div className='flex-col bg-gray-500'>
			<h1 className='text-gray-400'>Your Projects</h1>
			<button
				className='text-gray-400 bg-gray-700 rounded-md p-1'
				onClick={addProject}>
				+ Add Project
			</button>
			<ProjectList></ProjectList>

			{showCreateForm && <CreateProject></CreateProject>}
		</div>
	);
}

export default Sidebar;
