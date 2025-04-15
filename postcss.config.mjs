const config = {
	plugins: {
		"@tailwindcss/postcss": {
			theme: {
				extend: {
					fontFamily: {
						poppins: "var(--font-poppins)", // Используем CSS-переменную
					},
				},
			},
		},
	},
};
export default config;
