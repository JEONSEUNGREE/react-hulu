/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    // 그리드 커스텀하기
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
