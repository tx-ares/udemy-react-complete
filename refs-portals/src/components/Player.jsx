import { useState } from 'react';

export default function Player() {
	const [enteredPlayerName, setEnteredPlayerName] = useState(null);
	const [submitted, setSubmitted] = useState(false);

	function handleChange(event) {
		setSubmitted(false);
		setEnteredPlayerName(event.target.value);
	}

	function handleClick(event) {
		setSubmitted(true);
	}

	return (
		<section id='player'>
			<h2>
				{submitted ? 'Welcome ' + enteredPlayerName : 'Who are you?'}
			</h2>
			<p>
				<input
					type='text'
					onChange={handleChange}
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
