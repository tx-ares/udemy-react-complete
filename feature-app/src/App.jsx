import Sidebar from './components/Sidebar/Sidebar';
import SelectedProject from './components/SelectedProject/SelectedProject';
import NewProject from './components/Sidebar/NewProject';
import { useState } from 'react';
import NoProjectSelected from './components/SelectedProject/NoProjectSelected';

function App() {
	// By using a single state object we can better handle all these state properties and ensure we don't lose previous state when updating a single property.
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function startAddProjectHandler() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	const addProjectHandler = (project) => {
		if (project) {
			const newProject = {
				...project,
				id: Math.random(), // TODO: Basic ID generator.  Isn't guarenteed to be unique. Will improve later
			};
			setProjectsState((prevState) => {
				return {
					...prevState,
					projects: [...prevState.projects, newProject],
					selectedProjectId: undefined,
				};
			});
		}
	};

	const cancelAddProjectHandler = () => {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	};

	const selectProjectHandler = (id) => {
		// setCurrentProject(id);
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
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

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	console.log(projectsState);

	let content = (
		<SelectedProject
			updateProject={updateProjectHandler}
			currentProject={selectedProject}
		/>
	);

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAddProject={addProjectHandler} />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = (
			<NoProjectSelected
				onStartAddProject={startAddProjectHandler}></NoProjectSelected>
		);
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<Sidebar
				projectList={projectsState.projects}
				onStartAddProject={startAddProjectHandler}
				onSelectProject={selectProjectHandler}
				selectedProjectId={projectsState.selectedProjectId}></Sidebar>
			{content}
		</main>
	);
}

export default App;
