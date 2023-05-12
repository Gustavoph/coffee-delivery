'use client'

import { tw } from '@/utils/tw'
import { CircleNotch, IconProps } from '@phosphor-icons/react'

export function LoadingIcon({ className, ...rest }: IconProps) {
  return (
    <CircleNotch
      size={32}
      weight="bold"
      className={tw('animate-spin text-purple-01', className)}
      {...rest}
    />
  )
}

export * from '@phosphor-icons/react'
