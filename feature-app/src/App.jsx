import Sidebar from './components/Sidebar/Sidebar';
import Details from './components/Details/Details';
import CreateProjectForm from './components/Sidebar/CreateProjectForm';
import { useState } from 'react';

function App() {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [projectList, setProjectList] = useState([]);
	const [currentProject, setCurrentProject] = useState(null);

	function handleShowCreateForm() {
		setShowCreateForm(true);
	}

	const addProjectHandler = (project) => {
		if (project) {
			setProjectList((prevProjectList) => [project, ...prevProjectList]);
			setShowCreateForm(false);
		}
	};

	const showDetails = (details) => {
		setCurrentProject(details);
	};

	const updateProject = (updatedDetails) => {
		console.log(updatedDetails);
	};

	return (
		<div className='flex max-h-screen'>
			<Sidebar
				projectList={projectList}
				showCreateForm={handleShowCreateForm}
				showDetails={showDetails}></Sidebar>
			{showCreateForm ? (
				<CreateProjectForm
					onAddProject={addProjectHandler}></CreateProjectForm>
			) : !currentProject ? (
				<h1>Start by adding or selecting a project.</h1>
			) : (
				<Details currentProject={currentProject}></Details>
			)}
		</div>
	);
}

export default App;
