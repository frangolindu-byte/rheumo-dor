import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#112C1B",
                    mid: "#25512C",
                    green: "#67925D",
                    light: "#DEDFD8",
                    gold: "#C8962A",
                    amber: "#F0B429",
                },
            },
            fontFamily: {
                heading: ["var(--font-manrope)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            keyframes: {
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-16px)" },
                },
                "glow-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(200,150,42,.5)" },
                    "50%": { boxShadow: "0 0 40px rgba(200,150,42,.9)" },
                },
                "wa-ping": {
                    "0%": { transform: "scale(1)", opacity: "0.8" },
                    "100%": { transform: "scale(1.7)", opacity: "0" },
                },
            },
            animation: {
                "float": "float 5s ease-in-out infinite",
                "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
                "wa-ping": "wa-ping 2s ease-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
