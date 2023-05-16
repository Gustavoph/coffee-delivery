'use client'

import { clsx } from 'clsx'
import { w } from 'windstitch'
import { twMerge } from 'tailwind-merge'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, PropsWithChildren, ReactElement } from 'react'

interface IconButtonProps extends ComponentProps<'button'>, PropsWithChildren {
  color?: 'yellow' | 'purple'
  icon?: ReactElement
}

const IconButtonVariants = w.button(
  'transition duration-75 w-[38px] h-[38px] rounded-md cursor-pointer flex items-center justify-center',
  {
    variants: {
      color: {
        yellow: 'bg-yellow-light',
        purple: 'bg-purple-dark hover:bg-purple-base',
      },
    },

    defaultVariants: {
      color: 'yellow',
    },
  },
)

export function IconButton({
  color = 'yellow',
  children,
  className,
  icon,
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonVariants color={color} className={twMerge(className)} {...rest}>
      <Slot
        className={clsx(`h-[22px] w-[22px]`, {
          'text-white': color === 'purple',
          'text-yellow-dark': color === 'yellow',
        })}
      >
        {children}
      </Slot>
    </IconButtonVariants>
  )
}
