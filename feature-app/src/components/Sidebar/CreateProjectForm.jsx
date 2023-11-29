import { useState } from 'react';

const CreateProjectForm = (props) => {
	// This component will use the default props object instead of destructuring it to demonstrate different ways to access props
	const [formError, setFormError] = useState(false);
	function submitHandler(event) {
		const { title, description, dueDate } = event.target.elements;
		event.preventDefault();
		if (
			title.value.trim() === '' ||
			description.value.trim() === '' ||
			dueDate.value.trim().value === ''
		) {
			setFormError(true);
		} else {
			setFormError(false);
			props.onAddProject({
				id: Math.random(),
				title: title.value,
				description: description.value,
				date: dueDate.value,
				tasks: [],
			});
		}
	}

	const textClasses =
		'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

	return (
		<form
			className='flex-col'
			onSubmit={submitHandler}>
			<div className='flex flex-col gap-1 my-4'>
				<label className='text-sm font-bold uppercase text-stone-500'>
					Title
				</label>
				<input
					className={textClasses}
					type='text'
					id='title'></input>
			</div>

			<div className='flex flex-col gap-1 my-4'>
				<label className='text-sm font-bold uppercase text-stone-500'>
					Description
				</label>
				<textarea
					className={textClasses}
					id='description'></textarea>
			</div>

			<div className='flex flex-col gap-1 my-4'>
				<label className='text-sm font-bold uppercase text-stone-500'>
					Due Date
				</label>
				<input
					className={textClasses}
					type='date'
					id='dueDate'></input>
			</div>
			{formError ? (
				<p className='mb-4 text-red-400'>
					There is an error in your fields. Please verify that all
					fields have been filled.
				</p>
			) : (
				''
			)}

			<div className='buttons-container flex'>
				<button
					type='submit'
					className='text-gray-400 bg-gray-700 rounded-md p-1 hover:text-gray-200'>
					Save
				</button>
				<button
					onClick={props.onCancelAddProject}
					type='button'
					className='text-gray-400 bg-gray-700 rounded-md p-1 hover:text-gray-200'>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default CreateProjectForm;
