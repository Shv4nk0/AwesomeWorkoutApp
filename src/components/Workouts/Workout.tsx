"use client";

import { useDispatch } from "react-redux";
import Exercise from "../Exercise";
import { increaseMuscle } from "@/app/workoutsSlice";
import { ArrowRightLeft } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { IExercise } from "../Programs";

const Workout = ({
	workoutName,
	exerciseObject,
	altExerciseObject,
}: {
	workoutName: string;
	exerciseObject: IExercise[];
	altExerciseObject?: IExercise[];
}) => {
	const dispatch = useDispatch();
	const [currentObject, setCurrentObject] = useState(exerciseObject);

	const handleExerciseClick = (muscleGroup: string, muscles: string[]) => {
		muscles.forEach((muscle) => {
			/* @ts-expect-error причина ПОШЕЛ НАХУЙ ТС */
			dispatch(increaseMuscle({ group: muscleGroup, muscle }));
		});
	};

	useEffect(() => {
		setCurrentObject(exerciseObject);
	}, [exerciseObject]);

	return (
		<div className="flex flex-col gap-4 ">
			<div className="text-2xl mx-auto font-comfortaa">
				<div className="flex gap-2">
					{workoutName}
					{altExerciseObject && (
						<ArrowRightLeft
							className="relative top-[2px]"
							onClick={() => {
								setCurrentObject((prev) =>
									prev === exerciseObject ? altExerciseObject : exerciseObject
								);
							}}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-2 w-screen px-4  font-comfortaa">
				{currentObject.map((exercise) => (
					<Exercise
						name={exercise.name}
						key={exercise.name + "key"}
						onClick={() =>
							handleExerciseClick(exercise.muscleGroup, exercise.muscleSubGroup)
						}
						weight={exercise.weight}
						amount={exercise.reps}
					/>
				))}
			</div>
		</div>
	);
};

export default memo(Workout);
