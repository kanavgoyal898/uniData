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
      fontSize: {
        "2xs": "var(--custom-2xs)",
        "xs": "var(--custom-xs)",
        "sm": "var(--custom-sm)",
        "md": "var(--custom-md)",
        "lg": "var(--custom-lg)",
        "xl": "var(--custom-xl)",
        "2xl": "var(--custom-2xl)",
        "3xl": "var(--custom-3xl)",
        "4xl": "var(--custom-4xl)",
        "5xl": "var(--custom-5xl)",
        "6xl": "var(--custom-6xl)",
      },
      fontFamily: {
        "roboto": "var(--font-roboto)",
      },
      spacing: {
        "2xs": "var(--custom-2xs)",
        "xs": "var(--custom-xs)",
        "sm": "var(--custom-sm)",
        "md": "var(--custom-md)",
        "lg": "var(--custom-lg)",
        "xl": "var(--custom-xl)",
        "2xl": "var(--custom-2xl)",
        "3xl": "var(--custom-3xl)",
        "4xl": "var(--custom-4xl)",
        "5xl": "var(--custom-5xl)",
        "6xl": "var(--custom-6xl)",
      },
    },
  },
  plugins: [],
}

