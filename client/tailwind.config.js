/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          red: '#ff2a3b',
          'red-dark': '#b81525',
          bg: '#07080b',
          surface: '#0e1017',
          border: '#26161b',
          green: '#00ff66',
          cyan: '#00f0ff',
          gold: '#ffd700'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif']
      }
    },
  },
  plugins: [],
}
