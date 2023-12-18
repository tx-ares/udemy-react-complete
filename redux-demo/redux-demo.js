const redux = require('redux'); // Important to remember that redux being a 3rd party package can be used in any JavaScript application and is not directly tied to React.

// A reducer function is a not a React specific concept.  It is simply a pure function that takes an assortment of values and reduces them to a single value.
// In the case of Redux, the reducer function takes the current state and an action and returns the new state.
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
		};
	}
};

// The store is the central hub of Redux.  It holds the current state of the application and will update the state when a specified reducer function is called.
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
