'use client'

import { Slot } from '@radix-ui/react-slot'
import { ReactElement } from 'react'

import { Text } from './ui/Text'
import clsx from 'clsx'

interface PaymentSelectProps {
  icon: ReactElement
  text: string
  isSelected?: boolean
}

export function PaymentSelect({
  icon,
  text,
  isSelected = false,
}: PaymentSelectProps) {
  return (
    <div
      className={clsx(
        'h-12 w-44 gap-3 bg-base-button rounded-md flex items-center justify-center hover:bg-base-hover transition duration-75 cursor-pointer',
        {
          'border border-purple-base bg-purple-light': isSelected,
        },
      )}
    >
      <Slot className="h-4 w-4 text-purple-base">{icon}</Slot>
      <Text size="xs" className="uppercase">
        {text}
      </Text>
    </div>
  )
}
