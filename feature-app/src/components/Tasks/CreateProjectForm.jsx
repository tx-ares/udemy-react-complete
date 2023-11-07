import { createPortal } from 'react-dom';

const CreateProjectForm = (props) => {
	function submitHandler(event) {
		console.log(props);
		event.preventDefault();
		props.onAddProject({
			id: 1,
			title: 'a new title',
			description: 'blah blah',
			date: new Date(),
		});
		debugger;
	}

	return createPortal(
		<form
			className='flex-col'
			onSubmit={submitHandler}>
			<div className='flex'>
				<label>Title</label>
				<input type='text'></input>
			</div>

			<div className='flex'>
				<label>Description</label>
				<input type='text'></input>
			</div>

			<div className='flex'>
				<label>Due Date</label>
				<input type='date'></input>
			</div>

			<div className='buttons-container flex'>
				<button
					type='submit'
					className='text-gray-400 bg-gray-700 rounded-md p-1 hover:text-gray-200'>
					Save
				</button>
				<button className='text-gray-400 bg-gray-700 rounded-md p-1 hover:text-gray-200'>
					Cancel
				</button>
			</div>
		</form>,
		document.getElementById('tasks')
	);
};

export default CreateProjectForm;
