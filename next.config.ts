import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // Делаем Next.js статическим
	distDir: "out", // Файлы будут в "out" (нужно для Capacitor)
};

export default nextConfig;
