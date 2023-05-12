/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        baloo2: ['var(--font-baloo2)'],
      },
      colors: {
        'yellow-base': '#DBAC2C',
        'yellow-dark': '#C47F17',
        'yellow-light': '#F1E9C9',

        'purple-dark': '#4B2995',
        'purple-base': '#8047F8',
        'purple-light': '#EBE5F9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2 ',

        background: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
