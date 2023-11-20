import Sidebar from './components/Sidebar/Sidebar';
import Details from './components/Details/Details';
import CreateProjectForm from './components/Sidebar/CreateProjectForm';
import { useState } from 'react';

function App() {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [projectList, setProjectList] = useState([
		{
			id: 1,
			title: 'my title',
			description: 'some data...',
			dueDate: new Date(),
			tasks: [],
		},
	]);

	function handleShowCreateForm() {
		setShowCreateForm(true);
	}

	const addProjectHandler = (project) => {
		console.log(project);
		if (project) {
			setProjectList((prevProjectList) => [project, ...prevProjectList]);
			setShowCreateForm(false);
		}
	};

	const showDetails = (details) => {
		console.log(details, ' << from app comp');
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
			) : (
				<Details></Details>
			)}
		</div>
	);
}

export default App;
