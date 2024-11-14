/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',
        'primary-accent': 'var(--primary-accent)',
        'secondary-accent': 'var(--secondary-accent)',
        'complement': 'var(--complement)',
      },
      fontSize: {
        '3xs': 'var(--font-3xs)',
        '2xs': 'var(--font-2xs)',
        'xs': 'var(--font-xs)',  
        'sm': 'var(--font-sm)',  
        'md': 'var(--font-md)',  
        'lg': 'var(--font-lg)',  
        'xl': 'var(--font-xl)',  
        '2xl': 'var(--font-2xl)',
        '3xl': 'var(--font-3xl)',
        '4xl': 'var(--font-4xl)',
        '5xl': 'var(--font-5xl)',
      },
      borderRadius: {
        'xs': 'var(--border-radius-xs)',
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}

