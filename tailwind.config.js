/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'iris': 'rgb(var(--iris) / <alpha-value>)'
      },
      fontFamily: {
        'avalon': ['Avalon', 'Arial', 'sans-serif']
      },
      boxShadow: {
        '3xl': '-1px 21px 40px',
        '4xl': '5px 33px 40px'
      }
    }
  },
  plugins: []
}