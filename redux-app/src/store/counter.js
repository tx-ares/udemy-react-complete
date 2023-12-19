import { createSlice } from '@reduxjs/toolkit';

const initCounterState = {
	counter: 0,
	showCounter: true,
};

export const counterSlice = createSlice({
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

export const counterActions = counterSlice.actions;
