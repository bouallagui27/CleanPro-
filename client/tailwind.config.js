/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:      '#7C3AED',
          purple2:     '#6D28D9',
          purpleLight: '#A855F7',
          blue:        '#3B82F6',
        },
        bg: {
          primary:   '#0A0A0F',
          secondary: '#12121A',
          card:      '#1A1A2E',
          overlay:   '#16213E',
        },
        text: {
          primary:   '#FFFFFF',
          secondary: '#94A3B8',
          muted:     '#64748B',
        },
        border: {
          card: '#2A2A3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}