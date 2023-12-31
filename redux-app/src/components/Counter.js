import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import { useSelector, connect, useDispatch } from 'react-redux';
// connect is only needed if this was a class-based component. It is used to wire up the component to the redux store and mapping the reducer functions to the types in this component. It is a higher order component.
// Since this is a functional component, we can use the useSelector hook to access the state and the useDispatch hook to dispatch actions to the reducer which is arguably a better way to do it since React hooks are the future of React.
const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter); // By using useSelector, we can access a slice of the state. It also creates a subscription from this component to the store. It also removes the subscription upon unmounting ( destroying ) of the component.
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	function increaseHandler() {
		dispatch(counterActions.increase(5));
	}

	function decrementHandler() {
		dispatch(counterActions.decrement());
	}

	function toggleCounterHandler() {
		dispatch(counterActions.toggle());
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
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
