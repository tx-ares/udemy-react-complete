import React, { useState } from 'react';

const NewTask = ({ onAdd }) => {
	const [enteredTask, setEnteredTask] = useState('');

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClick() {
		if (enteredTask.trim('').length !== 0) {
			onAdd(enteredTask);
			setEnteredTask('');
		}
	}
	return (
		<div className='flex items-center gap-4 mb-4'>
			<input
				className='w-64 px-2 py-1 rounded-sm bg-stone-200 mr-4'
				type='text'
				onChange={handleChange}
				value={enteredTask}
			/>
			<button
				type='submit'
				className='text-stone-700 hover:text-stone-950'
				onClick={handleClick}>
				+ Add Task
			</button>
		</div>
	);
};

export default NewTask;
