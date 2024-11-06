/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryDark": "var(--primary-dark)",
        "secondaryDark": "var(--secondary-dark)",
        "tertiaryDark": "var(--tertiary-dark)",
        "hyperlink": "var(--hyperlink)",
        "white": "var(--white)",
        "black": "var(--black)",
      },
      fontFamily: {
        "roboto": "var(--font-roboto)",
      },
    },
  },
  plugins: [],
}

