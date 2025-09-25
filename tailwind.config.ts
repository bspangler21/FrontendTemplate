import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#ffffff",
				accent: "#646cff", // Add your accent color
			},
		},
	},
	plugins: [],
};

export default config;
