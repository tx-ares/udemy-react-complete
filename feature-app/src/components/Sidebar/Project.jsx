function Project({ details, showDetails }) {
	const handleClick = () => {
		showDetails(details);
	};

	return (
		<div
			className='w-full px-2 rounded-sm mt-3 pt-3 pb-3 hover:text-gray-200 hover:bg-gray-400 cursor-pointer'
			onClick={handleClick}>
			{details.title}
		</div>
	);
}

export default Project;
