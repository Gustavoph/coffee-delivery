import { styled } from '../../styles'

export const HomeContainer = styled('header', {
  height: 104,
})

export const HomeContent = styled('nav', {
  maxWidth: 1080,
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,

  div: {
    height: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '$purple-light',
    padding: '0 0.5rem',
    borderRadius: 6,
  },

  span: {
    fontSize: 14,
    color: '$purple-dark',
  },

  button: {
    height: 38,
    width: 38,
    borderRadius: 6,
    border: 'none',
    backgroundColor: '$yellow-light',
  },
})
