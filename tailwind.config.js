/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#1A73E8',
        'navyBlue': '#1D212D',
        'black': '#000',
        'white': '#fff',
        'off-white': '#f5f5f5',
        'shadow-gray': '#F2F2F2',
        'matte-black': '#232325',
        'light-black': '#1b1b1b',
        'lightgray': 'rgb(0,0,0, 0.1)',
        'gray': '#8f8f8f',
        'lightblue': '#9aded1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
