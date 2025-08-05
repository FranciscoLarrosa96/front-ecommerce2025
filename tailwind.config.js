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
        'cart-bounce': 'cartBounce 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        cartBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(-4px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(221, 14, 124, 0.1)',
        'custom-lg': '0 8px 30px rgba(221, 14, 124, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
