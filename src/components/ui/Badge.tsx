import { tw } from '@/utils/tw'
import { ComponentProps } from 'react'

interface BadgeProps extends ComponentProps<'div'> {
  label: string
}

export function Badge({ label, className, ...rest }: BadgeProps) {
  return (
    <div
      className={tw(
        'bg-yellow-light flex items-center justify-center rounded-full h-[21px] px-2 py-1',
        className,
      )}
      {...rest}
    >
      <p className="uppercase text-yellow-dark font-bold font-roboto text-[10px]">
        {label}
      </p>
    </div>
  )
}
