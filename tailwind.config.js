/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'purple': 'rgb(var(--purple) / <alpha-value>)',
        'violet': 'rgb(var(--violet) / <alpha-value>)',
        'lavender': 'rgb(var(--lavender) / <alpha-value>)',
        'iris': 'rgb(var(--iris) / <alpha-value>)',
        'dark': 'rgb(var(--dark) / <alpha-value>)',
        'emphasis1': 'rgb(var(--emphasis1) / <alpha-value>)',
        'emphasis2': 'rgb(var(--emphasis2) / <alpha-value>)',
        'emphasis3': 'rgb(var(--emphasis3) / <alpha-value>)'
      },
      fontFamily: {
        'avalon': ['Avalon', 'Arial', 'sans-serif']
      },
      boxShadow: {
        '3xl': '-1px 21px 40px',
        '4xl': '5px 33px 40px'
      },
      animation: {
        'zoom-in': 'zoom-in 1s ease-in-out',
        'zoom-in-right': 'zoom-in-right 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'bounce-in': 'bounce-in 1s ease-in-out'
      },
      keyframes: {
        'zoom-in': {
          'from': {
            opacity: '0',
            transform: 'scale3d(.3, .3, .3)'
          },
          '50%': {
            opacity: '1'
          }
        },
        'zoom-in-right': {
          'from': {
            'transform-origin': '50% 50%',
            opacity: '0',
            transform: 'translate3d(100%, 0, 0) scale3d(.1, .1, .1)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
          }
        },
        'fade-in-left': {
          'from': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'none'
          }
        },
        'fade-in-up': {
          'from': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'none'
          }
        },
        'bounce-in': {
          'from, 20%, 40%, 60%, 80%, 100%': {
            'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
          },
          '0%': {
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)'
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)'
          },
          '40%': {
            transform: 'scale3d(.9, .9, .9)'
          },
          '60%': {
            opacity: 1,
            transform: 'scale3d(1.03, 1.03, 1.03)'
          },
          '80%': {
            transform: 'scale3d(.97, .97, .97)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale3d(1, 1, 1)'
          }
        }
      }
    }
  },
  plugins: []
}