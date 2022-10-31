import cx from 'classnames'
import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  cls?: string
}

export function TextInput({ cls, ...props }: TextInputProps) {
  return (
    <>
      <input
        {...props}
        className={cx(
          'p-3 w-full bg-base-input text-text-s border border-base-button text-base-text',
          'focus:border-yellow-dark placeholder:text-base-label rounded outline-none',
          cls,
        )}
      />
    </>
  )
}
