function Task({ title }) {
	return (
		<li className='flex justify-between my-4'>
			<span>{title}</span>
			<button className='text-stone-700 hover:text-red-500'>Clear</button>
		</li>
	);
}

export default Task;
