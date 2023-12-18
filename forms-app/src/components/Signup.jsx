export default function Signup() {
	function handleSubmit(event) {
		event.preventDefault();
		console.log('Form submitted!');

		const formData = new FormData(event.target); // FormData is a built-in class that allows us to easily access the data from a form.  All inputs must have a name attribute to properly be included in the FormData object.
		const acquisitionChannel = formData.getAll('acquisition');
		const data = Object.fromEntries(formData.entries()); // The FormData object has a method called entries() that returns an iterator over the key-value pairs in the form.  We can use this to create an object with the data from the form.
		data.acquisition = acquisitionChannel;

		event.target.reset(); // We can reset the form by calling the reset() method on the event.target object.
		// It should be noted that this is technically considered an imperative approach to resetting the form, but in this case it results in much less / cleaner code than the declarative approach so the trade off is worth it.
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Welcome on board!</h2>
			<p>
				We just need a little bit of data from you to get you started 🚀
			</p>

			<div className='control'>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='email'
					name='email'
				/>
			</div>

			<div className='control-row'>
				<div className='control'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
					/>
				</div>

				<div className='control'>
					<label htmlFor='confirm-password'>Confirm Password</label>
					<input
						id='confirm-password'
						type='password'
						name='confirm-password'
					/>
				</div>
			</div>

			<hr />

			<div className='control-row'>
				<div className='control'>
					<label htmlFor='first-name'>First Name</label>
					<input
						type='text'
						id='first-name'
						name='first-name'
					/>
				</div>

				<div className='control'>
					<label htmlFor='last-name'>Last Name</label>
					<input
						type='text'
						id='last-name'
						name='last-name'
					/>
				</div>
			</div>

			<div className='control'>
				<label htmlFor='phone'>What best describes your role?</label>
				<select
					id='role'
					name='role'>
					<option value='student'>Student</option>
					<option value='teacher'>Teacher</option>
					<option value='employee'>Employee</option>
					<option value='founder'>Founder</option>
					<option value='other'>Other</option>
				</select>
			</div>

			<fieldset>
				<legend>How did you find us?</legend>
				<div className='control'>
					<input
						type='checkbox'
						id='google'
						name='acquisition'
						value='google'
					/>
					<label htmlFor='google'>Google</label>
				</div>

				<div className='control'>
					<input
						type='checkbox'
						id='friend'
						name='acquisition'
						value='friend'
					/>
					<label htmlFor='friend'>Referred by friend</label>
				</div>

				<div className='control'>
					<input
						type='checkbox'
						id='other'
						name='acquisition'
						value='other'
					/>
					<label htmlFor='other'>Other</label>
				</div>
			</fieldset>

			<div className='control'>
				<label htmlFor='terms-and-conditions'>
					<input
						type='checkbox'
						id='terms-and-conditions'
						name='terms'
					/>
					I agree to the terms and conditions
				</label>
			</div>

			<p className='form-actions'>
				<button
					type='reset'
					className='button button-flat'>
					Reset
				</button>
				<button
					type='submit'
					className='button'>
					Sign up
				</button>
			</p>
		</form>
	);
}
