import { PropsWithChildren } from 'react'

interface IndicatorProps extends PropsWithChildren {
  label?: string | number
}

export function Indicator({ label, children }: IndicatorProps) {
  return (
    <div className="relative h-full w-fit">
      <div className="absolute right-[-10px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark">
        <p className="font-roboto text-xs font-bold text-white">{label}</p>
      </div>
      {children}
    </div>
  )
}
