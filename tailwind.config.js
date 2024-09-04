/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#037C6E", // Example with Deep Teal
        textPrimary: "#2d2d2d",
        textSecondary: "#6b7280",
        background: "#f7f9fc",
        highlight: "#ff5722",
      },
      fontFamily: {
        Dream: ["Dream", "sans-serif"],
        DreamBold: ["DreamBold", "sans-serif"],
        Caveat: ["Caveat", "sans-serif"],
   
      },
    },
  },
  plugins: [],
};
