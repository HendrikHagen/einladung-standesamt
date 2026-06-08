/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#F9D5D3',
          light: '#FFF0EF',
          dark: '#E8A5A0',
        },
        lavender: {
          DEFAULT: '#E8DEFF',
          dark: '#C5B8FF',
        },
        sage: {
          DEFAULT: '#D0E8D0',
          dark: '#9DC99D',
        },
        champagne: '#F7E7CE',
        'dusty-rose': '#D4869A',
        ivory: '#FFFAF5',
        warm: '#4A3543',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
