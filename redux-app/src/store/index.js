import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { authSlice } from './auth';

// We always maintain the one Store object, but we can add additional reducer keys to it. Each key will then identify a slice of the state managed by that reducer.
const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
