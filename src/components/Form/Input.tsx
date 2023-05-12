import { twMerge } from 'tailwind-merge'
import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  optional?: boolean
}

export function InputComponent(
  { optional = false, className, ...rest }: InputProps,
  ref: any,
) {
  return (
    <div className="flex items-center gap-3 w-full h-[42px] p-3 border bg-base-input rounded-[4px] border-base-button focus-within:border-yellow-dark">
      <input
        ref={ref}
        className={twMerge(
          `bg-transparent flex-1 text-sm outline-none text-base-text font-roboto placeholder:text-base-label`,
          className,
        )}
        {...rest}
      />

      {optional && (
        <span className="text-xs font-roboto text-base-label italic">
          Optional
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputComponent)
