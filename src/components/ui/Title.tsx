import { w } from 'windstitch'

export const Title = w.h2('font-baloo2 font-bold', {
  variants: {
    variant: {
      base: 'text-base-title',
      subtitle: 'text-base-subtitle',
    },

    size: {
      '5xl': 'text-5xl',
      '3xl': 'text-3xl',
      xl: 'text-xl',
      xs: 'text-lg',
    },
  },

  defaultVariants: {
    variant: 'base',
    size: '5xl',
  },
})
