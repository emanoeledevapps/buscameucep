/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        secondary: "#56CCF2",
        background: "#FFFFFF",
        surface: "#F2F2F2",
        text: {
          primary: "#333333",
          secondary: "#828282"
        },
        error: "#EB5757"
      }
    },
  },
  plugins: [],
}

