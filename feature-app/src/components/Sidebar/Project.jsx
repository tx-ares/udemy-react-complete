function Project({ details, showDetails }) {
	const handleClick = () => {
		showDetails(details);
	};

	return <div onClick={handleClick}>{details.title}</div>;
}

export default Project;
