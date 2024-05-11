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
        "gradient-radial-sm":
          "radial-gradient(circle 700px at 50% 20%,var(--tw-gradient-stops))",
        "gradient-radial-md":
          "radial-gradient(circle 800px at 50% 20%,var(--tw-gradient-stops))",
        "gradient-radial-lg":
          "radial-gradient(circle 1100px at 50% 20%,var(--tw-gradient-stops))",
        "gradient-ball":
          "radial-gradient(90.75% 90.75% at 50% 19.05%,var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
