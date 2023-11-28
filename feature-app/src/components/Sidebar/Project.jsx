function Project({ details, showDetails }) {
	const handleClick = () => {
		showDetails(details);
	};

	return (
		<div
			className='pt-4 pb-4 hover:text-gray-200 cursor-pointer'
			onClick={handleClick}>
			{details.title}
		</div>
	);
}

export default Project;
