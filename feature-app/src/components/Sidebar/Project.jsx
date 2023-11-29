function Project({ details, onSelectProject, classes }) {
	const handleClick = () => {
		onSelectProject(details);
	};
	debugger;
	return (
		<div
			className={classes}
			onClick={() => handleClick(details.id)}>
			{details.title}
		</div>
	);
}

export default Project;
