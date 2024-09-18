/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002460',
        secondary: '#659ffc',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '720px',
        md: '900px',
        lg: '1024px',
        xl: '1400px',
      },
      fontFamily: {
        serif: ['Noto Serif Devanagari', 'serif'],
        sans: ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
