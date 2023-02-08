/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#3B82F6',
          secondary: '#10B981',

          accent: "#1FB2A5",

          neutral: "#191D24",

          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
