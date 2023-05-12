import { PropsWithChildren } from 'react'

interface IndicatorProps extends PropsWithChildren {
  label?: string | number
}

export function Indicator({ label, children }: IndicatorProps) {
  return (
    <div className="w-fit h-full relative">
      <div className="h-5 w-5 rounded-full bg-yellow-dark absolute top-[-10px] right-[-10px] flex items-center justify-center">
        <p className="text-white font-roboto text-xs font-bold">{label}</p>
      </div>
      {children}
    </div>
  )
}
