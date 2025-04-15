"use client";
import { Provider } from "react-redux";
import "./globals.css";

import { Poppins } from "next/font/google";
import { store } from "./store";
import WeekReset from "./WeekReset";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"], // Указываем нужные веса
	variable: "--font-poppins", // Создаем CSS-переменную
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${poppins.variable} antialiased font-poppins`} lang="en">
			<Provider store={store}>
				<WeekReset />
				<body className={`bg-[rgb(12,4,11)]`}>{children}</body>
			</Provider>
		</html>
	);
}
