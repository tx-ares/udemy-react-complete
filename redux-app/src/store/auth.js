import { createSlice } from '@reduxjs/toolkit';

const initAuthState = {
	isAuthenticated: false,
};

export const authSlice = createSlice({
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

export const authActions = authSlice.actions;
