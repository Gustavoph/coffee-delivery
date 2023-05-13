import { Plus, Minus } from '@/components/ui/icons'
import { Text } from './ui/Text'
import { ComponentProps } from 'react'
import { tw } from '@/utils/tw'

interface CounterProps extends ComponentProps<'div'> {}

export function Counter({ className, ...rest }: CounterProps) {
  return (
    <div
      className={tw(
        'flex items-center gap-2 justify-center w-[72px] h-8 bg-base-button rounded-md',
        className,
      )}
      {...rest}
    >
      <Minus className="h-[14px] w-[14px] text-purple-base hover:text-purple-dark cursor-pointer" />
      <Text className="text-base-title">1</Text>
      <Plus className="h-[14px] w-[14px] text-purple-base hover:text-purple-dark cursor-pointer" />
    </div>
  )
}
