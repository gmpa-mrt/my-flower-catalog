/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['vibes', 'sans-serif'],
      },
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          100: '#DBD7D2',
          200: '#CCC7C2',
          300: '#696969',
        },
        black: {
          default: '#000000',
          100: '#292827',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}