import { useState } from 'react';

export default function Login() {
	const [enteredData, setEnteredData] = useState({
		email: '',
		password: '',
	});

	const [emailIsInvalid, setEmailIsInvalid] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setEnteredData(() => {
			const updatedData = {
				email: event.target.email.value,
				password: event.target.password.value,
			};
			console.log(updatedData);

			const emailIsValid = updatedData.email.includes('@');

			if (!emailIsValid) {
				setEmailIsInvalid(true);
			} else {
				setEmailIsInvalid(false);
			}
			console.log(emailIsValid, emailIsInvalid);

			console.log('Form submitted!');

			return updatedData;
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
