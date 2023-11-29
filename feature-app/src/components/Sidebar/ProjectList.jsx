import Project from './Project';

function ProjectList({ projects, showDetails }) {
	const projectElements = projects.map((proj, i) => {
		return (
			<li key={proj.id}>
				<Project
					key={i}
					details={proj}
					showDetails={showDetails}></Project>
			</li>
		);
	});

	return <ul id='project-list'>{projectElements}</ul>;
}

export default ProjectList;
