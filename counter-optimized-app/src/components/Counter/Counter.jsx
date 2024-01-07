import { useState, memo, useCallback } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
	log('Calculating if is prime number', 2, 'other');
	if (number <= 1) {
		return false;
	}

	const limit = Math.sqrt(number);

	for (let i = 2; i <= limit; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

// memo is stores the component in memory and only re-renders it if the props change.
// This is a shallow comparision and will not work with complex objects for example if
// the props contain arrays or objects.  (To compare those types of props would require
// a deep comparision which is not built into React.You would need to use a library like lodash to do that. )
// This is a useful way to optimize your app if you have a component that is re-rendering, however should not always be used.
// If you have a component that is re - rendering because it is receiving new props and you want it to re - render, then you should not use memo.
// Keep in mind that if you prevent rendering using memo method to a parent component, the children will also not re-render.
const Counter = memo(function Counter({ initialCount }) {
	log('<Counter /> rendered', 1);
	const initialCountIsPrime = isPrime(initialCount);

	const [counter, setCounter] = useState(initialCount);

	const handleDecrement = useCallback(function handleDecrement() {
		setCounter((prevCounter) => prevCounter - 1);
	}, []);

	const handleIncrement = useCallback(function handleIncrement() {
		setCounter((prevCounter) => prevCounter + 1);
	}, []);

	return (
		<section className='counter'>
			<p className='counter-info'>
				The initial counter value was <strong>{initialCount}</strong>.
				It <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong>{' '}
				prime number.
			</p>
			<p>
				<IconButton
					icon={MinusIcon}
					onClick={handleDecrement}>
					Decrement
				</IconButton>
				<CounterOutput value={counter} />
				<IconButton
					icon={PlusIcon}
					onClick={handleIncrement}>
					Increment
				</IconButton>
			</p>
		</section>
	);
});

export default Counter;
