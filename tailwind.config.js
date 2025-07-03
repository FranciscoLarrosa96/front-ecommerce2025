module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#dd0e7c',
        secondary: '#6b1d68',
        background: '#f9fafb',
        text: '#27272a',
        border: '#fcd6e2',
        hover: '#c6006d',
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        pop: 'pop 0.3s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
