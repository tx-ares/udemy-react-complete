import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('ticking...');
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			max={TIMER}
			value={remainingTime}></progress>
	);
}
