import { tw } from '@/utils/tw'
import Image from 'next/image'

import { Text } from './ui/Text'
import { Counter } from './Counter'
import { Button } from './ui/Button'
import { Trash } from './ui/icons'
import { Coffee } from '@/shared/types/Coffee'
import { formatCurrency } from '@/utils/format-currency'

interface CartCoffeeCardProps {
  coffee: Coffee
}

export function CartCoffeeCard({ coffee }: CartCoffeeCardProps) {
  return (
    <div
      className={tw('h-20 w-[368px] flex items-center bg-base-card px-1 py-2')}
    >
      <Image alt={coffee.name} src={coffee.imageUrl} width={64} height={64} />

      <div className="ml-5">
        <Text variant="label" className="text-base-subtitle">
          {coffee.name}
        </Text>

        <div className="flex gap-2">
          <Counter />

          <Button size="small" className="min-w-[91px]">
            <Trash className="text-purple-base w-4 h-4" />
            Remover
          </Button>
        </div>
      </div>

      <div className="ml-auto self-start">
        <Text weight="bold">R$ {formatCurrency(coffee.amount)}</Text>
      </div>
    </div>
  )
}
