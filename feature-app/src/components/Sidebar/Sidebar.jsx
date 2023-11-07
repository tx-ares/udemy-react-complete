import { useState } from 'react';
import ProjectList from './ProjectList';
import CreateProject from '../Tasks/CreateProjectForm';

function Sidebar() {
	const [projectList, setProjectList] = useState([
		{ title: 'my title', description: 'some data...', dueDate: new Date() },
	]);
	const [showCreateForm, setShowCreateForm] = useState(false);

	function openCreateForm() {
		setShowCreateForm(true);
	}

	const addProjectHandler = (project) => {
		console.log(project);
		if (project) {
			setProjectList((prevProjectList) => [project, ...prevProjectList]);
		}
	};

	return (
		<div className='flex-col bg-gray-500'>
			<h1 className='text-gray-400'>Your Projects</h1>
			<button
				className='text-gray-400 bg-gray-700 rounded-md p-1'
				onClick={openCreateForm}>
				+ Add Project
			</button>
			<ProjectList projects={projectList}></ProjectList>

			{showCreateForm && (
				<CreateProject onAddProject={addProjectHandler}></CreateProject>
			)}
		</div>
	);
}

export default Sidebar;
