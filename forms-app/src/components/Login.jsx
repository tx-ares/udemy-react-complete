import { useState } from 'react';
import Input from './Input';

export default function Login() {
	const [enteredData, setEnteredData] = useState({
		email: '',
		password: '',
	});

	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setEnteredData(() => {
			const updatedData = {
				email: event.target.email.value,
				password: event.target.password.value,
			};
			console.log(updatedData);

			const emailIsValid = updatedData.email.includes('@');
			const passwordIsValid = updatedData.password.trim().length > 5;

			if (!emailIsValid) {
				setEmailIsInvalid(true);
			} else {
				setEmailIsInvalid(false);
			}

			if (!passwordIsValid) {
				setPasswordIsInvalid(true);
			} else {
				setPasswordIsInvalid(false);
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
				<Input
					label='Email'
					id='email'
					type='email'
					name='email'
					error={
						emailIsInvalid && 'Please enter a valid email address.'
					}
				/>

				<Input
					label='Password'
					id='password'
					type='password'
					name='password'
					error={
						passwordIsInvalid && 'Please enter a valid password.'
					}
				/>
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
