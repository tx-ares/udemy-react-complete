import { useState } from 'react';

export default function Login() {
	const [enteredData, setEnteredData] = useState({
		email: '',
		password: '',
	});

	const [edited, setEdited] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = edited.email && !enteredData.email.includes('@');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredData);
	}

	function handleDataChange(event) {
		setEnteredData({
			...enteredData,
			[event.target.name]: event.target.value,
		});
		setEdited({
			...edited,
			[event.target.name]: false,
		});
	}

	function handleInputBlur(event) {
		console.log(event.target.value);
		setEdited({
			...edited,
			[event.target.name]: true,
		}); // This will clear the error message when the user starts typing again.
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onBlur={handleInputBlur}
						onChange={handleDataChange}
					/>
					<div className='control-error'>
						{emailIsInvalid && <p>Please enter a valid email.</p>}
					</div>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onChange={handleDataChange}
					/>
				</div>
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
					Login
				</button>
			</p>
		</form>
	);
}
