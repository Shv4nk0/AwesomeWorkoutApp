"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Exercise = ({
	name,
	weight,
	amount = "max",
	onClick = () => {},
}: {
	name: string;
	weight: number | string;
	amount?: number | string;
	onClick: () => void;
}) => {
	const [animate, setAnimate] = useState(false);

	return (
		<motion.div
			onClick={() => {
				setAnimate(true);
				onClick();
			}}
			animate={
				animate
					? {
							scale: [1, 0.95, 1],
							opacity: [1, 0.9, 1],
							transition: { duration: 0.2 },
					  }
					: {}
			}
			onAnimationComplete={() => setAnimate(false)}
			className="text-sm gap-2 bg-[rgb(46,30,44)] px-2 py-[6px] rounded-md"
		>
			<b className="text-[rgb(225,146,214)]">{name}:</b> {weight} x {amount}
		</motion.div>
	);
};

export default Exercise;
