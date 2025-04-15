"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";

const WorkoutName = ({
	name,
	onClick,
	isChosen,
}: {
	name: string;
	onClick: () => void;
	isChosen: boolean;
}) => {
	return (
		<div
			onClick={onClick}
			className={`${
				!isChosen && "text-[rgb(225,146,214)]"
			} transition-all duration-150 font-semibold font-comfortaa`}
		>
			{name}
			<Separator
				className={`opacity-0 ${
					isChosen && "opacity-100"
				} h-[1px] transition-opacity duration-150 bg-[rgb(102,102,102,0.5)]`}
			/>
		</div>
	);
};

export default WorkoutName;
