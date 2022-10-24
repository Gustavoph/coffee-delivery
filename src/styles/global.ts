import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$background',
    color: '$base-text',
    boxSizing: 'border-box',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 700,
    fontFamily: 'Baloo 2 cursive',
  },
})
