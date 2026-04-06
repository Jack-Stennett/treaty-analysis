/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:  { DEFAULT: '#F7F3EB', light: '#FAF8F4', dark: '#EDE5D6', border: '#DDD5C0' },
        navy:   { DEFAULT: '#1F2A36', light: '#2A3C4E', muted: '#4A6070' },
        gold:   { DEFAULT: '#C2A46D', light: '#D4BC8E', dark:  '#A88850' },
        sage:   { DEFAULT: '#7D8F69', light: '#96A882', dark:  '#637256' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}

