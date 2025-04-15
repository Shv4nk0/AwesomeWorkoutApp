import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MuscleGroups } from "./workoutSliceInterface";

// Ожидаемый тип для payload
interface IncreaseMusclePayload {
	group: keyof MuscleGroups; // Это ключ из MuscleGroups (например, 'legs', 'back')
	muscle: keyof MuscleGroups[keyof MuscleGroups]; // Это ключ из подгрупп (например, 'quadriceps', 'lats')
}

const initialState: MuscleGroups = {
	legs: {
		quadriceps:
			typeof window !== "undefined"
				? Number(localStorage.getItem("quadriceps")) ?? 0
				: 0,
		hamstrings:
			typeof window !== "undefined"
				? Number(localStorage.getItem("hamstrings")) ?? 0
				: 0,
		glutes:
			typeof window !== "undefined"
				? Number(localStorage.getItem("glutes")) ?? 0
				: 0,
		calves:
			typeof window !== "undefined"
				? Number(localStorage.getItem("calves")) ?? 0
				: 0,
		adductors:
			typeof window !== "undefined"
				? Number(localStorage.getItem("adductors")) ?? 0
				: 0,
		abductors:
			typeof window !== "undefined"
				? Number(localStorage.getItem("abductors")) ?? 0
				: 0,
	},
	back: {
		lats:
			typeof window !== "undefined"
				? Number(localStorage.getItem("lats")) ?? 0
				: 0,
		traps:
			typeof window !== "undefined"
				? Number(localStorage.getItem("traps")) ?? 0
				: 0,
		rhomboids:
			typeof window !== "undefined"
				? Number(localStorage.getItem("rhomboids")) ?? 0
				: 0,
		lowerBack:
			typeof window !== "undefined"
				? Number(localStorage.getItem("lowerBack")) ?? 0
				: 0,
	},
	chest: {
		upperChest:
			typeof window !== "undefined"
				? Number(localStorage.getItem("upperChest")) ?? 0
				: 0,
		lowerChest:
			typeof window !== "undefined"
				? Number(localStorage.getItem("lowerChest")) ?? 0
				: 0,
	},
	shoulders: {
		frontDelts:
			typeof window !== "undefined"
				? Number(localStorage.getItem("frontDelts")) ?? 0
				: 0,
		sideDelts:
			typeof window !== "undefined"
				? Number(localStorage.getItem("sideDelts")) ?? 0
				: 0,
		rearDelts:
			typeof window !== "undefined"
				? Number(localStorage.getItem("rearDelts")) ?? 0
				: 0,
	},
	hands: {
		biceps:
			typeof window !== "undefined"
				? Number(localStorage.getItem("biceps")) ?? 0
				: 0,
		triceps:
			typeof window !== "undefined"
				? Number(localStorage.getItem("triceps")) ?? 0
				: 0,
		forearms:
			typeof window !== "undefined"
				? Number(localStorage.getItem("forearms")) ?? 0
				: 0,
	},
	core: {
		upperAbs:
			typeof window !== "undefined"
				? Number(localStorage.getItem("upperAbs")) ?? 0
				: 0,
		lowerAbs:
			typeof window !== "undefined"
				? Number(localStorage.getItem("lowerAbs")) ?? 0
				: 0,
	},
};

const workoutCounterSlice = createSlice({
	name: "workoutCounter",
	initialState,
	reducers: {
		increaseMuscle: (
			state: MuscleGroups,
			action: PayloadAction<IncreaseMusclePayload>
		) => {
			const { group, muscle } = action.payload;
			if (state[group] && state[group][muscle] !== undefined) {
				/* @ts-expect-error причина ПОШЕЛ НАХУЙ ТС */
				state[group][muscle] += 1;
				localStorage.setItem(muscle, `${state[group][muscle]}`);
			}
		},
	},
});

export const selectLegs = (state: MuscleGroups) => state.legs;
export const selectBack = (state: MuscleGroups) => state.back;
export const selectChest = (state: MuscleGroups) => state.chest;
export const selectShoulders = (state: MuscleGroups) => state.shoulders;
export const selectHands = (state: MuscleGroups) => state.hands;
export const selectCore = (state: MuscleGroups) => state.core;

export const selectLegsQuadriceps = (state: MuscleGroups) =>
	state?.legs?.quadriceps;
export const selectLegsHamstrings = (state: MuscleGroups) =>
	state?.legs?.hamstrings;
export const selectLegsGlutes = (state: MuscleGroups) => state?.legs?.glutes;
export const selectLegsCalves = (state: MuscleGroups) => state?.legs?.calves;
export const selectLegsAdductors = (state: MuscleGroups) =>
	state?.legs?.adductors;
export const selectLegsAbductors = (state: MuscleGroups) =>
	state?.legs?.abductors;

export const selectBackLats = (state: MuscleGroups) => state?.back?.lats;
export const selectBackTraps = (state: MuscleGroups) => state?.back?.traps;
export const selectBackRhomboids = (state: MuscleGroups) =>
	state?.back?.rhomboids;
export const selectBackLowerBack = (state: MuscleGroups) =>
	state?.back?.lowerBack;

export const selectChestUpperChest = (state: MuscleGroups) =>
	state?.chest?.upperChest;
export const selectChestLowerChest = (state: MuscleGroups) =>
	state?.chest?.lowerChest;

export const selectShouldersFrontDelts = (state: MuscleGroups) =>
	state?.shoulders?.frontDelts;
export const selectShouldersSideDelts = (state: MuscleGroups) =>
	state?.shoulders?.sideDelts;
export const selectShouldersRearDelts = (state: MuscleGroups) =>
	state?.shoulders?.rearDelts;

export const selectHandsBiceps = (state: MuscleGroups) => state?.hands?.biceps;
export const selectHandsTriceps = (state: MuscleGroups) =>
	state?.hands?.triceps;
export const selectHandsForearms = (state: MuscleGroups) =>
	state?.hands?.forearms;

export const selectCoreUpperAbs = (state: MuscleGroups) =>
	state?.core?.upperAbs;
export const selectCoreLowerAbs = (state: MuscleGroups) =>
	state?.core?.lowerAbs;

export const { increaseMuscle } = workoutCounterSlice.actions;

export default workoutCounterSlice.reducer;
