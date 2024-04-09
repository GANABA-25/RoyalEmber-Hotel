/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      lineHeight: {
        11: "3rem",
        12: "4rem",
        15: "6rem",
      },
      width: {
        128: "90%",
        85: "365px",
        97: "2500px",
        98: "3000px",
      },
      fontSize: {
        3.5: ["35.3px"],
        4.5: ["38px"],
      },
      margin: {
        26: "90px",
      },
      padding: {
        0.2: "0.2px",
      },
    },
  },
  plugins: [],
};
