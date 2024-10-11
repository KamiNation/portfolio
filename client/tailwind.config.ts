import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      screens: {
				'sm': { 'min': '320px', 'max': '480px' },
				// => @media (min-width: 640px and max-width: 767px) { ... }

				'md': { 'min': '481px', 'max': '650px' },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				'lg': { 'min': '651px', 'max': '768px' },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				'xl': { 'min': '768px', 'max': '1024px' },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				'2xl': { 'min': '1024px' },
				// => @media (min-width: 1536px) { ... }
			},
    },
  },
  plugins: [],
};
export default config;
