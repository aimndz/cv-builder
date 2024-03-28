/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        900: "1000px",
      },
      boxShadow: {
        "custom-glow": "0 0 30px rgb(14 165 233 / 0.5);",
      },
      minWidth: {
        "resume-width": "700px",
        "sidebar-btn": "330px",
      },
      width: {
        "sidebar-btn": "700px",
      },
    },
  },
  plugins: [],
};
