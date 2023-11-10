import ProjectDetail from './ProjectDetail';

function ProjectList(projectList) {
	console.log(projectList, ' << list');

	const projectDetailElements = projectList.projects.map((proj, i) => {
		return (
			<ProjectDetail
				key={i}
				title={proj.title}
				description={proj.description}
				dueDate={proj.dueDate}></ProjectDetail>
		);
	});

	return <div id='project-list'>{projectDetailElements}</div>;
}

export default ProjectList;
