/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "#001111",
        "custom-purple": "#625ac4",
      },
      width: {
        85: "85%", // Define a custom width of 85%
        14: "14%", // Define a custom width of 14%
      },
    },
  },
  plugins: [],
};

