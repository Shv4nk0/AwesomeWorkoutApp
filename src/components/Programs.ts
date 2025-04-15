import { MuscleGroups } from "@/app/workoutSliceInterface";

type MuscleSubGroups = {
	legs: keyof MuscleGroups["legs"];
	back: keyof MuscleGroups["back"];
	chest: keyof MuscleGroups["chest"];
	shoulders: keyof MuscleGroups["shoulders"];
	hands: keyof MuscleGroups["hands"];
	core: keyof MuscleGroups["core"];
};

export interface IExercise {
	name: string;
	sets: number;
	reps: string | number;
	weight: number | string;
	muscleGroup: keyof MuscleGroups;
	muscleSubGroup: MuscleSubGroups[keyof MuscleSubGroups][]; // Используем правильный тип для muscleSubGroup
}

export const LegsAndAbs: IExercise[] = [
	{
		name: "Приседания со штангой",
		sets: 5,
		reps: "6-8",
		weight: 170,
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes", "hamstrings"],
	},
	{
		name: "Сгибания ног на тренажере",
		sets: 4,
		reps: 12,
		weight: 54,
		muscleGroup: "legs",
		muscleSubGroup: ["hamstrings"],
	},
	{
		name: "Глубокие приседания со штангой",
		sets: 4,
		reps: "6-8",
		weight: 120,
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes", "hamstrings"],
	},
	{
		name: "Болгарские сплит-приседы",
		sets: 3,
		reps: "10-12",
		weight: 40,
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes", "hamstrings"],
	},
	{
		name: "Подъемы на носки сидя",
		sets: 4,
		reps: 15,
		weight: 60,
		muscleGroup: "legs",
		muscleSubGroup: ["calves"],
	},
	{
		name: "Жим ногами широкой постановкой",
		sets: 4,
		reps: "6-8",
		weight: 160,
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes"],
	},
	{
		name: "Молитва",
		sets: 3,
		reps: 15,
		weight: 60,
		muscleGroup: "core",
		muscleSubGroup: ["upperAbs"],
	},
	{
		name: "Поднятия ног",
		sets: 3,
		weight: "свободный",
		reps: 12,
		muscleGroup: "core",
		muscleSubGroup: ["lowerAbs"],
	},
];

export const LegsAndAbs2: IExercise[] = [
	{
		name: "Становая тяга на прямых ногах",
		sets: 4,
		reps: "8-10",
		weight: 100,
		muscleGroup: "legs",
		muscleSubGroup: ["hamstrings", "glutes", "lowerBack"],
	},
	{
		name: "Жим ногами",
		sets: 4,
		reps: "6-8",
		weight: "max",
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes", "hamstrings"],
	},
	{
		name: "Подъемы на носки стоя",
		sets: 4,
		reps: 20,
		weight: 90,
		muscleGroup: "legs",
		muscleSubGroup: ["calves"],
	},
	{
		name: "Глубокие сумо-приседания",
		sets: 4,
		reps: "8-10",
		weight: 100,
		muscleGroup: "legs",
		muscleSubGroup: ["quadriceps", "glutes", "hamstrings", "adductors"],
	},
	{
		name: "Молитва",
		sets: 3,
		reps: 15,
		weight: 60,
		muscleGroup: "core",
		muscleSubGroup: ["upperAbs"],
	},
	{
		name: "Поднятия ног",
		sets: 3,
		reps: 12,
		weight: "свободный",
		muscleGroup: "core",
		muscleSubGroup: ["lowerAbs"],
	},
];

export const ChestAndArms: IExercise[] = [
	{
		name: "Жим штанги лежа",
		sets: 4,
		reps: "4-6",
		weight: 85,
		muscleGroup: "chest",
		muscleSubGroup: ["upperChest", "lowerChest", "triceps", "frontDelts"],
	},
	{
		name: "Кроссовер в тренажере",
		sets: 3,
		reps: "8-10",
		weight: 40,
		muscleGroup: "chest",
		muscleSubGroup: ["upperChest", "lowerChest", "frontDelts", "triceps"],
	},
	{
		name: "Поднятия гантелей над головой",
		sets: 4,
		reps: "8-10",
		weight: 22.5,
		muscleGroup: "shoulders",
		muscleSubGroup: ["frontDelts"],
	},
	{
		name: "Жим Арнольда",
		sets: 3,
		reps: "8-10",
		weight: 22,
		muscleGroup: "shoulders",
		muscleSubGroup: ["frontDelts", "sideDelts"],
	},
	{
		name: "Отжимания на брусьях",
		sets: 3,
		reps: "до отказа",
		weight: "max",
		muscleGroup: "hands",
		muscleSubGroup: ["lowerChest", "triceps"],
	},
	{
		name: "Разгибания на верхнем блоке",
		sets: 3,
		reps: "12-15",
		weight: 45,
		muscleGroup: "hands",
		muscleSubGroup: ["triceps"],
	},
];
export const ChestAndArms2: IExercise[] = [
	{
		name: "Жим на тренажёре",
		sets: 3,
		reps: "отказ",
		weight: 72,
		muscleGroup: "chest",
		muscleSubGroup: ["upperChest", "lowerChest", "frontDelts", "triceps"],
	},
	{
		name: "Кроссовер в тренажере",
		sets: 3,
		reps: "8-10",
		weight: 40,
		muscleGroup: "chest",
		muscleSubGroup: ["upperChest", "lowerChest", "frontDelts", "triceps"],
	},
	{
		name: "Жим Арнольда",
		sets: 3,
		reps: "8-10",
		weight: 22,
		muscleGroup: "shoulders",
		muscleSubGroup: ["frontDelts", "sideDelts"],
	},
	{
		name: "Поднятия на бицепс",
		sets: 3,
		reps: "8-10",
		weight: 35,
		muscleGroup: "hands",
		muscleSubGroup: ["biceps"],
	},
	{
		name: "Разгибания на верхнем блоке",
		sets: 3,
		reps: "12-15",
		weight: 45,
		muscleGroup: "hands",
		muscleSubGroup: ["triceps"],
	},
];

export const BackAndBiceps: IExercise[] = [
	{
		name: "Тяга вертикального блока",
		sets: 4,
		reps: "8-10",
		weight: 66,
		muscleGroup: "back",
		muscleSubGroup: ["lats"],
	},
	{
		name: "Тяга горизонтального блока",
		sets: 3,
		reps: "8-10",
		weight: 66,
		muscleGroup: "back",
		muscleSubGroup: ["lats"],
	},
	{
		name: "Дедлифт",
		sets: 4,
		reps: 6,
		weight: 135,
		muscleGroup: "back",
		muscleSubGroup: ["lowerBack"],
	},
	{
		name: "Гиперэкстензия",
		sets: 3,
		reps: 15,
		weight: 25,
		muscleGroup: "back",
		muscleSubGroup: ["lowerBack"],
	},
	{
		name: "Тяга верхнего блока в сторону",
		sets: 3,
		reps: "8-10",
		weight: 50,
		muscleGroup: "shoulders",
		muscleSubGroup: ["lats", "rearDelts"],
	},
];

export const BackAndBiceps2: IExercise[] = [
	{
		name: "Тяга верхнего блока за голову",
		sets: 4,
		reps: "8-10",
		weight: 62,
		muscleGroup: "back",
		muscleSubGroup: ["lats"],
	},
	{
		name: "Тяга горизонтального блока",
		sets: 3,
		reps: "8-10",
		weight: 66,
		muscleGroup: "back",
		muscleSubGroup: ["lats"],
	},
	{
		name: "Тяга штанги в наклонe",
		sets: 4,
		reps: 10,
		weight: "max",
		muscleGroup: "back",
		muscleSubGroup: ["lats", "lowerBack", "traps", "rearDelts"],
	},
	{
		name: "Шраги со штангой",
		sets: 3,
		reps: 15,
		weight: "max",
		muscleGroup: "back",
		muscleSubGroup: ["traps"],
	},
	{
		name: "Подтягивания",
		sets: 3,
		reps: "8-10",
		weight: "свободный",
		muscleGroup: "back",
		muscleSubGroup: ["lats"],
	},
];
