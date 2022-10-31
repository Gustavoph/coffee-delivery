/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cursive: ["'Baloo 2'", 'cursive'],
      sans: ['Roboto', 'sans-serif'],
    },

    fontSize: {
      tag: 10,
      'title-xl': 48,
      'title-l': 32,
      'title-m': 24,
      'title-s': 20,
      'title-xs': 18,
      'text-l': 20,
      'text-m': 16,
      'text-s': 14,
      'button-g': 14,
      'button-s': 12,
    },
    colors: {
      white: '#FFFFFF',
      background: '#FAFAFA',

      'base-text': '#574F4D',
      'base-card': '#F3F2F2',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-input': '#EDEDED',
      'base-title': '#272221',
      'base-button': '#E6E5E5',
      'base-subtitle': '#403937',

      purple: '#8047F8',
      yellow: '#DBAC2C',
      'purple-dark': '#4B2995',
      'yellow-dark': '#C47F17',
      'purple-light': '#EBE5F9',
      'yellow-light': '#F1E9C9',
    },
    extend: {
      backgroundImage: {
        'coffee-cover': "url('./src/assets/background.svg')",
      },
      borderColor: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
}
