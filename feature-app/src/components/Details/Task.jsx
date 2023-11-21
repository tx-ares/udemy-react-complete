function Task({ title }) {
	return (
		<div className='task flex-col'>
			{title}
			<button>Clear</button>
		</div>
	);
}

export default Task;
