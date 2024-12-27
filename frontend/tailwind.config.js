/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all your React/JS files
    "./public/index.html", // Ensure it includes your HTML files too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
