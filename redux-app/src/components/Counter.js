import classes from './Counter.module.css';
import { useSelector, connect } from 'react-redux';

const Counter = () => {
	const counter = useSelector((state) => state.counter); // By using useSelector, we can access a slice of the state. It also creates a subscription from this component to the store. It also removes the subscription upon unmounting ( destroying ) of the component.

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
