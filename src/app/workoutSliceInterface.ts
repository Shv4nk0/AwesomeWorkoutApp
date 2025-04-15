"use client";
export interface MuscleGroups {
	legs: {
		quadriceps: number;
		hamstrings: number;
		glutes: number;
		calves: number;
		adductors: number;
		abductors: number;
	};
	back: {
		lats: number;
		traps: number;
		rhomboids: number;
		lowerBack: number;
	};
	chest: {
		upperChest: number;
		lowerChest: number;
	};
	shoulders: {
		frontDelts: number;
		sideDelts: number;
		rearDelts: number;
	};
	hands: {
		biceps: number;
		triceps: number;
		forearms: number;
	};
	core: {
		upperAbs: number;
		lowerAbs: number;
	};
}
