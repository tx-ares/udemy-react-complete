const CreateProjectForm = (props) => {
	function submitHandler(event) {
		const { title, description, dueDate } = event.target.elements;

		event.preventDefault();
		props.onAddProject({
			id: Math.round(Math.random()),
			title: title.value,
			description: description.value,
			date: dueDate.value,
			tasks: [],
		});
	}

	return (
		<form
			className='flex-col'
			onSubmit={submitHandler}>
			<div className='flex'>
				<label>Title</label>
				<input
					type='text'
					id='title'></input>
			</div>

			<div className='flex'>
				<label>Description</label>
				<input
					type='text'
					id='description'></input>
			</div>

			<div className='flex'>
				<label>Due Date</label>
				<input
					type='date'
					id='dueDate'></input>
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
		</form>
	);
};

export default CreateProjectForm;
