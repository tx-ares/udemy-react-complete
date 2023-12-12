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
		tasks: [],
	});

	function startAddProjectHandler() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function addProjectHandler(project) {
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
	}

	function cancelAddProjectHandler() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function deleteProjectHandler() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	function selectProjectHandler(project) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: project.id,
			};
		});
	}

	function updateProjectHandler(updatedProject) {
		// TODO: theres a bug here.
		setProjectsState((prevState) => {
			// Find the index of the project to update
			const index = prevState.projects.findIndex(
				(project) => project.id === updatedProject.id
			);

			if (index !== -1) {
				// Use map to update the specific project without cloning the entire array

				return {
					...prevState,
					projects: [
						...prevState.projects,
						prevState.projects.map((project, i) =>
							i === index ? updatedProject : project
						),
					],
				};
			}

			// If the project is not found, return the original array
			return prevState;
		});
	}

	function addTaskHandler(taskTitle) {
		setProjectsState((prevState) => {
			const taskId = Math.random();
			const newTask = {
				projectId: prevState.selectedProjectId,
				id: taskId,
				title: taskTitle,
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	}

	function deleteTaskHandler(taskId) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== taskId),
			};
		});
	}

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	console.log(projectsState);

	let content = (
		<SelectedProject
			project={selectedProject}
			onDeleteProject={deleteProjectHandler}
			onAddTask={addTaskHandler}
			onDeleteTask={deleteTaskHandler}
			tasks={projectsState.tasks}
		/>
	);

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject
				onAddProject={addProjectHandler}
				onCancelAddProject={cancelAddProjectHandler}
			/>
		);
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
