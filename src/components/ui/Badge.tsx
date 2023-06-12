import { tw } from '@/utils/tw'
import { ComponentProps } from 'react'

interface BadgeProps extends ComponentProps<'div'> {
  label: string
}

export function Badge({ label, className, ...rest }: BadgeProps) {
  return (
    <div
      className={tw(
        'flex h-[21px] items-center justify-center rounded-full bg-yellow-light px-2 py-1',
        className,
      )}
      {...rest}
    >
      <p className="font-roboto text-[10px] font-bold uppercase text-yellow-dark">
        {label}
      </p>
    </div>
  )
}
