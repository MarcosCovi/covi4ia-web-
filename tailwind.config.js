/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan:       '#00D4FF',
          'cyan-dark':'#0099BB',
          navy:       '#0D1B2A',
          'navy-mid': '#142236',
          'navy-dark':'#080F18',
          copper:     '#C47B38',
          steel:      '#2C4A6E',
          'light-bg': '#F0F4F8',
          'mid-gray': '#7A8FA6',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',         'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.15' },
          '50%':      { opacity: '0.30' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'pulse-slow':'pulse2 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
