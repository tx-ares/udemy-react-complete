import { createSlice, configureStore } from '@reduxjs/toolkit';

const initCounterState = {
	counter: 0,
	showCounter: true,
};

const initAuthState = {
	isAuthenticated: false,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const authSlice = createSlice({
	name: 'authentication',
	initialState: initAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

// We always maintain the one Store object, but we can add additional reducer keys to it. Each key will then identify a slice of the state managed by that reducer.
const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

// We must also export the actions from the slices and use them in our components.  These get exported individually, so we can import them individually in our components.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
