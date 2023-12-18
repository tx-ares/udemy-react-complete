import { useState } from 'react';

export default function Login() {
	const [enteredData, setEnteredData] = useState({
		email: '',
		password: '',
	});

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredData);
	}

	function handleDataChange(event) {
		setEnteredData({
			...enteredData,
			[event.target.name]: event.target.value,
		});
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
						onChange={handleDataChange}
					/>
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
					type='button'
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
