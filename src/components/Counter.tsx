import { Plus, Minus } from '@/components/ui/icons'
import { Text } from './ui/Text'

export function Counter() {
  return (
    <div className="flex items-center gap-2 justify-center w-[72px] h-8 bg-base-button rounded-md">
      <Minus className="h-[14px] w-[14px] text-purple-base hover:text-purple-dark cursor-pointer" />
      <Text className="text-base-title">1</Text>
      <Plus className="h-[14px] w-[14px] text-purple-base hover:text-purple-dark cursor-pointer" />
    </div>
  )
}
