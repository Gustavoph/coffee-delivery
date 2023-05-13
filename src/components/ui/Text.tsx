import { w } from 'windstitch'

export const Text = w.p('font-roboto', {
  variants: {
    variant: {
      base: 'text-base text-base-text',
      label: 'text-sm text-base-label',
    },

    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },

  defaultVariants: {
    variant: 'base',
    weight: 'normal',
  },
})
