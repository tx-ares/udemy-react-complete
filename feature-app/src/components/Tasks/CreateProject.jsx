import { createPortal } from 'react-dom';

function CreateProject() {
	return createPortal(
		<form className='flex-col'>
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
		</form>,
		document.getElementById('tasks')
	);
}

export default CreateProject;
