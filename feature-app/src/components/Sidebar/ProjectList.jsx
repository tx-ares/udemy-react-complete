import Project from './Project';

function ProjectList({ projects, showDetails }) {
	debugger;

	const projectElements = projects.map((proj, i) => {
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
