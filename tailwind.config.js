/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Crucial for your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // This will correctly find all your JS/JSX/TS/TSX files in src and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
