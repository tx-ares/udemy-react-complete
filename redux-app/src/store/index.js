import { createSlice, configureStore } from '@reduxjs/toolkit';

const initState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload.amount;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;
