"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Helper function to calculate the week number
const getWeekNumber = (date: Date) => {
	const startDate = new Date(date.getFullYear(), 0, 1);
	const days = Math.floor(
		(date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
	);
	return Math.ceil((days + 1) / 7);
};

// Helper function to check if the week has changed
const hasWeekChanged = (lastResetDate: string) => {
	const today = new Date();
	const lastReset = new Date(lastResetDate);

	return (
		today.getFullYear() !== lastReset.getFullYear() ||
		getWeekNumber(today) !== getWeekNumber(lastReset)
	);
};

const WeekReset = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const lastResetDate = localStorage.getItem("lastResetDate");

		// Check if we are at the start of the week and if the reset has already occurred this week
		if (!lastResetDate || hasWeekChanged(lastResetDate)) {
			localStorage.clear();

			const today = new Date().toISOString().split("T")[0]; // Only store the date (YYYY-MM-DD)
			localStorage.setItem("lastResetDate", today);
		}
	}, [dispatch]); // Only run when the component mounts or when dispatch changes

	return null; // This component does not need to render anything
};

export default WeekReset;
