/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#080B11',
        surface: '#0E1420',
        border: '#1A2235',
        accent: '#00FF94',
        'accent-dim': '#00CC77',
        muted: '#4A5568',
        text: '#E2E8F0',
        'text-dim': '#8899AA',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #00FF9440' },
          to:   { boxShadow: '0 0 30px #00FF9480' },
        },
      },
    },
  },
  plugins: [],
}
