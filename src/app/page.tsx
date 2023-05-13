import { CatalogCoffeeCard } from '@/components/CatalogCoffeeCard'
import { Counter } from '@/components/Counter'
import { Input } from '@/components/Form/Input'
import { PaymentSelect } from '@/components/PaymentSelect'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Indicator } from '@/components/ui/Indicator'
import { Text } from '@/components/ui/Text'
import { Title } from '@/components/ui/Title'
import { CreditCard, ShoppingCartSimple } from '@/components/ui/icons'

import logo from '@/assets/express.png'
import { CartCoffeeCard } from '@/components/CartCoffeeCard'

export default function Home() {
  return (
    <main className="p-4">
      <div className="font-roboto">Hello World</div>

      <Input placeholder="Label" optional />

      <Button>Teste</Button>

      <Indicator label={0}>
        <IconButton>
          <ShoppingCartSimple weight="fill" />
        </IconButton>
      </Indicator>

      <Text variant="label">Gustavo Oliveira</Text>
      <Title>Testando</Title>

      <PaymentSelect
        icon={<CreditCard />}
        isSelected
        text="Cartão de crédito"
      />

      <Counter />

      <Badge label="Tradicional" className="w-20" />

      <CatalogCoffeeCard
        coffee={{
          id: '1',
          name: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          amount: 9.9,
          imageUrl: logo.src,
        }}
      />

      <CartCoffeeCard
        coffee={{
          id: '1',
          name: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          amount: 9.9,
          imageUrl: logo.src,
        }}
      />
    </main>
  )
}
