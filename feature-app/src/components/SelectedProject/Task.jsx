function Task({ title }) {
	return (
		<div className='task flex-col'>
			{title}
			<button className='ml-4 border-black border-solid rounded'>
				Clear
			</button>
		</div>
	);
}

export default Task;
