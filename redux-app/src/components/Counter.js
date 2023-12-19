import classes from './Counter.module.css';
import { useSelector, connect, useDispatch } from 'react-redux';
// connect is only needed if this was a class-based component. It is used to wire up the component to the redux store and mapping the reducer functions to the types in this component. It is a higher order component.
// Since this is a functional component, we can use the useSelector hook to access the state and the useDispatch hook to dispatch actions to the reducer which is arguably a better way to do it since React hooks are the future of React.
const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter); // By using useSelector, we can access a slice of the state. It also creates a subscription from this component to the store. It also removes the subscription upon unmounting ( destroying ) of the component.

	const toggleCounterHandler = () => {};

	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};

	function increaseHandler(amount) {
		dispatch({ type: 'increase', amount: 5 });
	}

	function decrementHandler() {
		dispatch({ type: 'decrement' });
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Add</button>
				<button onClick={increaseHandler}>Add 5</button>
				<button onClick={decrementHandler}>Subtract</button>
			</div>

			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
