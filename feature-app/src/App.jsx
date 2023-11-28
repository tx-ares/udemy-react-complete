import Sidebar from './components/Sidebar/Sidebar';
import Details from './components/Details/Details';
import CreateProjectForm from './components/Sidebar/CreateProjectForm';
import { useState } from 'react';
import noProjectImage from './assets/no-projects.png';

function App() {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [projectList, setProjectList] = useState([]);
	const [currentProject, setCurrentProject] = useState(null);

	// By using a single state object we can better handle all these state properties and ensure we don't lose previous state when updating a single property.
	const [projectsState, setProjectsState] = useState({
		selectedProject: undefined,
		projects: [],
	});

	function handleShowCreateForm() {
		setShowCreateForm(true);
	}

	const addProjectHandler = (project) => {
		if (project) {
			setProjectList((prevProjectList) => [project, ...prevProjectList]);
			setShowCreateForm(false);
		}
	};

	const cancelAddProjectHandler = () => {
		setShowCreateForm(false);
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
		<main className='h-screen my-8 flex gap-8'>
			<Sidebar
				projectList={projectList}
				showCreateForm={handleShowCreateForm}
				showDetails={showDetails}></Sidebar>

			{showCreateForm ? (
				<CreateProjectForm
					onAddProject={addProjectHandler}
					onCancelAddProject={
						cancelAddProjectHandler
					}></CreateProjectForm>
			) : !currentProject ? (
				<div className='mt-244 text-center w-2/3'>
					<img
						alt='An empty task list'
						className='w-16 h-16 object-contain mx-auto'
						src={noProjectImage}
					/>
					<h2 className='text-xl font-bold text-stone-500 my-4'>
						No Project Selected
					</h2>
					<p className='text-stone-400 mb-4'>
						Start by adding or selecting a project.
					</p>

					<button
						className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
						onClick={handleShowCreateForm}>
						Create new project
					</button>
				</div>
			) : (
				<Details
					updateProject={updateProjectHandler}
					currentProject={currentProject}></Details>
			)}
		</main>
	);
}

export default App;
