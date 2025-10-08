/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ["var(--font-montserrat)", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  