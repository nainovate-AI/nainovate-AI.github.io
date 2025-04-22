module.exports = {
  // purge: ['./src/**/*.{html,js}', './public/index.html'],
  content: ["./**/*.html"], // include your HTML files,
  safelist: ['bg-black'],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        darkBackground: '#1a1a1a',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}