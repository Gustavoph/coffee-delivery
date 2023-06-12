import Image from 'next/image'

import { Badge } from '@/components/ui/Badge'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { IconButton } from '@/components/ui/IconButton'
import { ShoppingCartSimple } from '@/components/ui/icons'
import { Counter } from '@/components/Counter'
import { Coffee } from '@/shared/types/Coffee'
import { formatCurrency } from '@/utils/format-currency'

interface CatalogCoffeeCardProps {
  coffee: Coffee
}

export function CatalogCoffeeCard({ coffee }: CatalogCoffeeCardProps) {
  return (
    <div className="flex h-[310px] w-64 flex-col items-center rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-base-card px-5 py-6">
      <Image
        alt="coffee"
        width={120}
        height={120}
        quality={100}
        className="-mt-11"
        src={coffee.imageUrl}
      />

      <Badge label="Tradicional" className="mb-4 mt-3" />

      <Title size="xl" variant="subtitle">
        {coffee.name}
      </Title>

      <Text className="text-center" variant="label" size="sm">
        {coffee.description}
      </Text>

      <div className="mt-8 flex w-full items-center justify-between">
        <Text size="2xl" weight="bold">
          <span className="pr-1 text-sm font-normal">R$</span>
          <span className="font-baloo2">{formatCurrency(coffee.amount)}</span>
        </Text>

        <div className="flex items-center justify-center gap-2">
          <Counter className="h-[38px]" />

          <IconButton color="purple">
            <ShoppingCartSimple weight="fill" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
