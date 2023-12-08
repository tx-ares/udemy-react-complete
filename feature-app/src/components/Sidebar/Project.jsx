function Project({ details, onSelectProject, classes }) {
	const handleClick = () => {
		onSelectProject(details);
	};
	return (
		<button
			className={classes}
			onClick={() => handleClick(details)}>
			{details.title}
		</button>
	);
}

export default Project;
