import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import cx from 'classnames'

interface PaymentCardProps {
  type: string
  icon: ReactNode
}

export function PaymentCard({ icon, type }: PaymentCardProps) {
  const isActive = false

  return (
    <div
      className={cx(
        'flex flex-1 cursor-pointer items-center bg-base-button rounded-md p-4 gap-3',
        'group hover:bg-base-hover border border-transparent',
        { 'bg-purple-light border border-purple': isActive },
      )}
    >
      <Slot className="text-purple">{icon}</Slot>
      <span className="text-base-text text-[12px] uppercase group-hover:text-base-subtitle">
        {type}
      </span>
    </div>
  )
}
