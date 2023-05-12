import { w } from 'windstitch'
import { twMerge } from 'tailwind-merge'
import { ComponentProps, PropsWithChildren, ReactElement } from 'react'

interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren {
  size?: 'small' | 'base'
  icon?: ReactElement
}

const ButtonVariants = w.button(
  'transition duration-75 w-full rounded-md cursor-pointer gap-1 flex items-center justify-center flex-row',
  {
    variants: {
      size: {
        small: 'h-8 bg-base-button hover:bg-base-hover',
        base: 'h-[46px] bg-yellow-base hover:bg-yellow-dark',
      },
    },

    defaultVariants: {
      size: 'base',
    },
  },
)

const ButtonText = w.p('uppercase font-roboto', {
  variants: {
    size: {
      base: 'font-bold text-sm text-white',
      small: 'text-xs text-base-text hover:text-base-subtitle',
    },
  },

  defaultVariants: {
    size: 'base',
  },
})

export function Button({
  size = 'base',
  children,
  className,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <ButtonVariants size={size} className={twMerge(className)} {...rest}>
      {icon && icon}
      <ButtonText size={size}>{children}</ButtonText>
    </ButtonVariants>
  )
}
