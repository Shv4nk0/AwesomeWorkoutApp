"use client";
import { useSelector } from "react-redux";
import { RootState } from "../app/store"; // Make sure the path to store is correct
import {
	selectLegsQuadriceps,
	selectLegsHamstrings,
	selectLegsGlutes,
	selectLegsCalves,
	selectLegsAdductors,
	selectLegsAbductors,
	selectBackLats,
	selectBackTraps,
	selectBackRhomboids,
	selectBackLowerBack,
	selectChestUpperChest,
	selectChestLowerChest,
	selectShouldersFrontDelts,
	selectShouldersSideDelts,
	selectShouldersRearDelts,
	selectHandsBiceps,
	selectHandsTriceps,
	selectHandsForearms,
	selectCoreUpperAbs,
	selectCoreLowerAbs,
} from "../app/workoutsSlice"; // импорт селекторов
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ExerciseAmountName from "./ExerciseAmountName";

const ExerciseAmount = () => {
	const quadriceps = useSelector((state: RootState) =>
		selectLegsQuadriceps(state.workoutCounter)
	);
	const hamstrings = useSelector((state: RootState) =>
		selectLegsHamstrings(state.workoutCounter)
	);
	const glutes = useSelector((state: RootState) =>
		selectLegsGlutes(state.workoutCounter)
	);
	const calves = useSelector((state: RootState) =>
		selectLegsCalves(state.workoutCounter)
	);
	const adductors = useSelector((state: RootState) =>
		selectLegsAdductors(state.workoutCounter)
	);
	const abductors = useSelector((state: RootState) =>
		selectLegsAbductors(state.workoutCounter)
	);

	const lats = useSelector((state: RootState) =>
		selectBackLats(state.workoutCounter)
	);
	const traps = useSelector((state: RootState) =>
		selectBackTraps(state.workoutCounter)
	);
	const rhomboids = useSelector((state: RootState) =>
		selectBackRhomboids(state.workoutCounter)
	);
	const lowerBack = useSelector((state: RootState) =>
		selectBackLowerBack(state.workoutCounter)
	);

	const upperChest = useSelector((state: RootState) =>
		selectChestUpperChest(state.workoutCounter)
	);
	const lowerChest = useSelector((state: RootState) =>
		selectChestLowerChest(state.workoutCounter)
	);

	const frontDelts = useSelector((state: RootState) =>
		selectShouldersFrontDelts(state.workoutCounter)
	);
	const sideDelts = useSelector((state: RootState) =>
		selectShouldersSideDelts(state.workoutCounter)
	);
	const rearDelts = useSelector((state: RootState) =>
		selectShouldersRearDelts(state.workoutCounter)
	);

	const biceps = useSelector((state: RootState) =>
		selectHandsBiceps(state.workoutCounter)
	);
	const triceps = useSelector((state: RootState) =>
		selectHandsTriceps(state.workoutCounter)
	);
	const forearms = useSelector((state: RootState) =>
		selectHandsForearms(state.workoutCounter)
	);

	const upperAbs = useSelector((state: RootState) =>
		selectCoreUpperAbs(state.workoutCounter)
	);
	const lowerAbs = useSelector((state: RootState) =>
		selectCoreLowerAbs(state.workoutCounter)
	);

	return (
		<div className="font-comfortaa flex flex-col">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Ноги
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							name="Квадрицепс"
							currentAmount={quadriceps}
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={hamstrings}
							name="Бицепс бедра"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={glutes}
							name="Ягодичные мышцы"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={calves}
							name="Икроножные"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={adductors}
							name="Приводящие мышцы бедра"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={abductors}
							name="Отводящие мышцы бедра"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="item-2">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Спина
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							currentAmount={lats}
							name="Широчайшие"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={traps}
							name="Трапеции"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={rhomboids}
							name="Ромбовидные мышцы"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={lowerBack}
							name="Поясничные мышцы"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="item-3">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Грудь
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							currentAmount={upperChest}
							name="Верхняя часть"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={lowerChest}
							name="Нижняя часть"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="item-4">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Плечи
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							currentAmount={frontDelts}
							name="Передний пучок дельтовидных мышц"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={sideDelts}
							name="Средний пучок дельтовидных мышц"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={rearDelts}
							name="Задний пучок дельтовидных мышц"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="item-5">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Руки
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							currentAmount={biceps}
							name="Бицепс"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={triceps}
							name="Трицепс"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={forearms}
							name="Предплечья"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type="single" collapsible>
				<AccordionItem value="item-6">
					<AccordionTrigger className="w-full flex justify-center items-center text-xl">
						Пресс
					</AccordionTrigger>
					<AccordionContent className="w-screen px-2 flex flex-col gap-2 text-sm">
						<ExerciseAmountName
							currentAmount={upperAbs}
							name="Верхние мышцы"
							amountTotal="6"
						/>
						<ExerciseAmountName
							currentAmount={lowerAbs}
							name="Нижние мышцы"
							amountTotal="6"
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default ExerciseAmount;
