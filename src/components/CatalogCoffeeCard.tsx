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
    <div className="flex items-center flex-col bg-base-card w-64 h-[310px] rounded-md rounded-tr-[36px] rounded-bl-[36px] px-5 py-6">
      <Image
        alt="coffee"
        width={120}
        height={120}
        quality={100}
        className="-mt-11"
        src={coffee.imageUrl}
      />

      <Badge label="Tradicional" className="mt-3 mb-4" />

      <Title size="xl" variant="subtitle">
        {coffee.name}
      </Title>

      <Text className="text-center" variant="label" size="sm">
        {coffee.description}
      </Text>

      <div className="flex items-center mt-8 justify-between w-full">
        <Text size="2xl" weight="bold">
          <span className="font-normal text-sm pr-1">R$</span>
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
