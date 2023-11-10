import Project from './Project';

function ProjectList(projectList) {
	const showDetails = (details) => {
		console.log(details);
	};

	const projectElements = projectList.projects.map((proj, i) => {
		return (
			<Project
				key={i}
				details={proj}
				showDetails={showDetails}></Project>
		);
	});

	return <div id='project-list'>{projectElements}</div>;
}

export default ProjectList;
