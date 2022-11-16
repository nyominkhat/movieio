/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7173ce",

          secondary: "#4cd379",

          accent: "#90e04e",

          neutral: "#242D33",

          "base-100": "#2D3339",

          info: "#7899ED",

          success: "#0D6334",

          warning: "red",

          error: "#E50914",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
