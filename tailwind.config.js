/** @type {import('tailwindcss').Config} */
export default {
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
          mid: '#4a46a6',
          light: '#817dbf',
          accent: '#ffe100',
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
