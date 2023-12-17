import React, { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout }) => {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);

		return () => {
			clearInterval(timer);
		};
	}, [timeout, onTimeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			id='question-time'
			value={remainingTime}
			max={timeout}
		/>
	);
};

export default QuestionTimer;
