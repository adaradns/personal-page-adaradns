/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#080a74',
          dark: '#0f0c8c',
          mid: '#4f4cbb',
          light: '#f31299',
          accent: '#ffe100',
        },
        night: {
          bg: '#2b2e3b',
          card: '#33374a',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal-accent': '4px 4px 0px 0px #ffe100',
        'brutal-white': '4px 4px 0px 0px #ffffff',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}
