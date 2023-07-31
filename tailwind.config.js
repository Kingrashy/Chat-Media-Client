/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobstar: "'Lobster', cursive",
        poppins: "'Poppins', sans-serif",
        sofia: "'Sofia Sans Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};
