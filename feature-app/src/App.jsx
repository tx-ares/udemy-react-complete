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

	const updateProjectHandler = (updatedProject) => {
		console.log(projectList);
		// TODO: theres a bug here.
		setProjectList((prevProjectList) => {
			// Find the index of the project to update
			const index = prevProjectList.findIndex(
				(project) => project.id === updatedProject.id
			);

			if (index !== -1) {
				// Use map to update the specific project without cloning the entire array
				return prevProjectList.map((project, i) =>
					i === index ? updatedProject : project
				);
			}

			// If the project is not found, return the original array
			return prevProjectList;
		});
	};

	return (
		<main className='h-screen my-8'>
			<div id='sidebar-container'>
				<Sidebar
					projectList={projectList}
					showCreateForm={handleShowCreateForm}
					showDetails={showDetails}></Sidebar>
			</div>

			<div id='details-container'>
				{showCreateForm ? (
					<CreateProjectForm
						onAddProject={addProjectHandler}></CreateProjectForm>
				) : !currentProject ? (
					<h1>Start by adding or selecting a project.</h1>
				) : (
					<Details
						updateProject={updateProjectHandler}
						currentProject={currentProject}></Details>
				)}
			</div>
		</main>
	);
}

export default App;
