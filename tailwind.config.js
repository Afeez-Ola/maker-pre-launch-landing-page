// tailwind.config.js
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'preset-one': ['3.5rem', {
          lineHeight: '3.6rem',
          letterSpacing: '0',
        }],
        'preset-1-mobile': ['2rem', {
          lineHeight: '2.4rem',
          letterSpacing: '0',
        }],
        'preset-2': ['2.5rem', {
          lineHeight: '3.5rem',
          letterSpacing: '0',
        }],
        'preset-3': ['2rem', {
          lineHeight: '2.8rem',
          letterSpacing: '0',
        }],
        'preset-4': ['1.125rem', {
          lineHeight: '1.575rem',
          letterSpacing: '0',
        }],
        'preset-5': ['0.938rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0',
        }],
        'preset-6': ['0.938rem', {
          lineHeight: '1.3rem',
          letterSpacing: '0',
        }],
        'preset-7': ['0.75rem', {
          lineHeight: '1.2rem',
          letterSpacing: '0',
        }],
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}