"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

import {
	BackAndBiceps,
	BackAndBiceps2,
	ChestAndArms,
	ChestAndArms2,
	LegsAndAbs,
	LegsAndAbs2,
} from "@/components/Programs";

import WorkoutName from "../components/WorkoutName";
import Workout from "../components/Workouts/Workout";
import ExerciseAmount from "../components/ExerciseAmount";

export default function Home() {
	const [chosenWorkout, setChosenWorkout] = useState("chest");
	const [description, setDescription] = useState(
		<Workout
			workoutName="Грудь и Руки"
			altExerciseObject={ChestAndArms2}
			exerciseObject={ChestAndArms}
		/>
	);

	useEffect(() => {
		switch (chosenWorkout) {
			case "legs":
				setDescription(
					<Workout
						workoutName="Ноги и Пресс"
						altExerciseObject={LegsAndAbs2}
						exerciseObject={LegsAndAbs}
					/>
				);
				break;
			case "back":
				setDescription(
					<Workout
						workoutName="Спина и Плечи"
						altExerciseObject={BackAndBiceps2}
						exerciseObject={BackAndBiceps}
					/>
				);
				break;
			default:
				setDescription(
					<Workout
						workoutName="Грудь и Руки"
						altExerciseObject={ChestAndArms2}
						exerciseObject={ChestAndArms}
					/>
				);
				break;
		}
	}, [chosenWorkout]);

	return (
		<div className="flex w-screen items-center flex-col gap-4 justify-center text-white font-lobster">
			<div className="mt-4 text-2xl font-bold font-comfortaa">Тренировка</div>
			<Separator className="bg-[rgba(102,102,102,0.5)]" />

			<div className="flex w-full justify-around text-xls ">
				<WorkoutName
					isChosen={chosenWorkout === "chest"}
					onClick={() => {
						setChosenWorkout("chest");
					}}
					name="Грудь"
				/>
				<WorkoutName
					isChosen={chosenWorkout === "back"}
					onClick={() => {
						setChosenWorkout("back");
					}}
					name="Спина"
				/>
				<WorkoutName
					isChosen={chosenWorkout === "legs"}
					onClick={() => {
						setChosenWorkout("legs");
					}}
					name="Ноги"
				/>
			</div>

			<div className="flex flex-col w-full items-center justify-center ">
				{description}
			</div>
			<Separator className="bg-[rgba(102,102,102,0.5)]" />
			<ExerciseAmount />
		</div>
	);
}
