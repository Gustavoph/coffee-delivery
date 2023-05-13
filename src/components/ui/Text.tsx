import { w } from 'windstitch'

export const Text = w.p('font-roboto', {
  variants: {
    variant: {
      base: 'text-base-text',
      label: 'text-base-label',
    },

    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },

    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },

  defaultVariants: {
    variant: 'base',
    weight: 'normal',
    size: 'base',
  },
})
