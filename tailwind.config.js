/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#06111f',
          900: '#0a1728',
          800: '#10233b',
        },
        brand: {
          blue: '#2563eb',
          green: '#10b981',
        },
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 23, 42, 0.12)',
        glow: '0 0 40px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
};
