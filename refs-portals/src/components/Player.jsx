import { useState, useRef } from 'react';

export default function Player() {
	const playerName = useRef(); // Ref is similar to using #identifiers in Angular, giving us access to the element itself and its properties

	const [enteredPlayerName, setEnteredPlayerName] = useState(null);

	function handleClick() {
		setEnteredPlayerName(playerName.current.value);
	}

	return (
		<section id='player'>
			<h2>
				{enteredPlayerName
					? 'Welcome ' + enteredPlayerName
					: 'Who are you?'}
			</h2>
			<p>
				<input
					ref={playerName}
					type='text'
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
