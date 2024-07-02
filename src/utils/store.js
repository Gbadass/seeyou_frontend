// store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './slicers/notificationSlice';
import userReducer from './slicers/userSlice';
import terminalReducer from './slicers/terminalSlice';

const store = configureStore({
	reducer: {
		notifications: notificationsReducer,
		user: userReducer,
		terminal: terminalReducer,
		// Add other reducers if needed
	},
	// Add middleware or other configurations as needed
});

export default store;
