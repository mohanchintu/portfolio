/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        figma: {
          green: '#00C274',
          emerald: '#10B981',
          emeraldDark: '#059669',
          mint: '#EAF8F2',
          lightmint: '#F3FAF6',
          darkBg: '#07120E',
          cardDark: '#0E1F18',
          cardDarkHover: '#142C22',
          borderDark: '#18382B',
          accentYellow: '#F59E0B',
          accentBlue: '#3B82F6',
          accentOrange: '#F97316'
        }
      },
      boxShadow: {
        'glow-green': '0 0 25px rgba(0, 194, 116, 0.35)',
        'glow-emerald': '0 0 35px rgba(16, 185, 129, 0.25)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-dark': '0 15px 35px -5px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(16, 185, 129, 0.15)',
        'mockup': '0 25px 60px -15px rgba(0, 30, 20, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif']
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
