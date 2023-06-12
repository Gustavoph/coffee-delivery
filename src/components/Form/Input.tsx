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
    <div className="flex h-[42px] w-full items-center gap-3 rounded-[4px] border border-base-button bg-base-input p-3 focus-within:border-yellow-dark">
      <input
        ref={ref}
        className={twMerge(
          `flex-1 bg-transparent font-roboto text-sm text-base-text outline-none placeholder:text-base-label`,
          className,
        )}
        {...rest}
      />

      {optional && (
        <span className="font-roboto text-xs italic text-base-label">
          Optional
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputComponent)
