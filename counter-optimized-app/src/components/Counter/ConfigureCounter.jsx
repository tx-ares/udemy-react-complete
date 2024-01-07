import React, { useState } from 'react';
import { log } from '../../log';

const ConfigureCounter = ({ onSetCount }) => {
	log('<ConfigureCounter /> rendered', 1);
	const [enteredNumber, setEnteredNumber] = useState(0);

	function handleChange(event) {
		setEnteredNumber(+event.target.value);
	}

	function handleSetClick() {
		onSetCount(enteredNumber);
		setEnteredNumber(0);
	}
	// Your component code here
	return (
		<section id='configure-counter'>
			<h2>Set Counter</h2>
			<input
				type='number'
				onChange={handleChange}
				value={enteredNumber}
			/>
			<button onClick={handleSetClick}>Set</button>
		</section>
	);
};

export default ConfigureCounter;
