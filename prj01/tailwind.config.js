/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(9%)' },
          '70%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(9%)' },
        },
    },
    animation: {
      'bounce-in': 'bounceIn 2s ease-in-out',
    },
    },
  },
  plugins: [],
}

