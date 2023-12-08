import Project from './Project';

function ProjectList({ projects, onSelectProject, selectedProjectId }) {
	const projectElements = projects.map((proj, i) => {
		let cssClasses =
			'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-300 hover:bg-stone-700 cursor-pointer';
		if (proj.id === selectedProjectId) {
			cssClasses += 'bg-stone-800 text-stone-200';
		} else {
			cssClasses += 'text-stone-400';
		}

		return (
			<li key={proj.id}>
				<Project
					classes={cssClasses}
					key={i}
					details={proj}
					onSelectProject={onSelectProject}></Project>
			</li>
		);
	});

	return (
		<ul
			className='mt-8'
			id='project-list'>
			{projectElements}
		</ul>
	);
}

export default ProjectList;
