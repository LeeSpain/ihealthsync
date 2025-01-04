/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all React components and JS/TS files
    "./public/index.html",       // Ensures Tailwind scans your main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008B8B", // Main branding color
        secondary: "#FF7F50", // Secondary branding color
        accent: "#20B2AA", // Accent color for highlights
        background: "#f9fafb", // Light gray background color
      },
      spacing: {
        128: "32rem", // Large spacing utility
        144: "36rem", // Extra-large spacing utility
      },
      borderRadius: {
        "4xl": "2rem", // Extra-large border radius
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for components
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333333",
            a: {
              color: "#008B8B",
              "&:hover": {
                color: "#FF7F50",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Adds form styling utilities
    require("@tailwindcss/typography"), // Improves typography styling
  ],
};
