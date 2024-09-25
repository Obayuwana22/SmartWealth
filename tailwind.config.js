/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "#38A1FF",
        secondaryClr: "#F4B100",
        gryClr: "#E7E7E7",
        grayText: "#7F7F7F",
        background: "#dceeff",
        grayBg: "#E7E7E7"
      },
    },
  },
  plugins: [],
};
