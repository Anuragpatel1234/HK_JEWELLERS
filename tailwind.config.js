/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hk: {
          bg: '#F7EBDD',
          cream: '#FFF7ED',
          champagne: '#FAF3EB',
          beige: '#E9D1B5',
          burgundy: '#4A0712',
          burgundyDark: '#35050D',
          burgundyLight: '#650A19',
          brown: '#2A1612',
          brownDark: '#1E0E0B',
          gold: '#B88A3B',
          goldSoft: '#D8B477',
          goldLight: '#E8D1A7',
          goldDark: '#8F6623',
          cardDark: '#1F1210',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        devanagari: ['"Rozha One"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(184, 138, 59, 0.15)',
        'burgundy-glow': '0 4px 24px -2px rgba(74, 7, 18, 0.35)',
        'card-elevated': '0 10px 30px -5px rgba(42, 22, 18, 0.25)',
      }
    },
  },
  plugins: [],
}
