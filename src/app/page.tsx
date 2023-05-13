import { Counter } from '@/components/Counter'
import { Input } from '@/components/Form/Input'
import { PaymentSelect } from '@/components/PaymentSelect'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Indicator } from '@/components/ui/Indicator'
import { Text } from '@/components/ui/Text'
import { Title } from '@/components/ui/Title'
import { CreditCard, ShoppingCartSimple } from '@/components/ui/icons'

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
    </main>
  )
}
