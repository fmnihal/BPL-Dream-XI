// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Add daisyUI here
  plugins: [
    daisyui,
  ],
  // Optional: you can specify the theme here
  // daisyui: {
  //   themes: ["light", "dark", "cupcake", "synthwave"],
  // },
};