"use client";

import { motion } from "framer-motion";

const ExerciseAmountName = ({
	name,
	currentAmount = 0,
	amountTotal,
}: {
	name: string;
	amountTotal: string | number;
	currentAmount: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }} // Начальная анимация (непрозрачность 0 и сдвиг вниз)
			animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }} // Анимация появления (непрозрачность до 1 и сдвиг вверх)
			exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }} // Анимация исчезновения
			className="flex justify-between"
		>
			<div>{name}</div>
			<div>
				{currentAmount}/{amountTotal}
			</div>
		</motion.div>
	);
};

export default ExerciseAmountName;
