import { configureStore } from "@reduxjs/toolkit";
import workoutCounterReducer from "./workoutsSlice";

// Configure the store with the workoutCounterReducer
export const store = configureStore({
	reducer: {
		workoutCounter: workoutCounterReducer, // Your slice reducer
	},
});

// Define RootState type based on the store's state structure
export type RootState = ReturnType<typeof store.getState>; // Automatically infers the type of the whole Redux state

// Export AppDispatch for dispatch typing
export type AppDispatch = typeof store.dispatch;
