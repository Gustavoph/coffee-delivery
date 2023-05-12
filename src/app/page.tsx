import { Input } from '@/components/Form/Input'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Indicator } from '@/components/ui/Indicator'
import { ShoppingCartSimple } from '@/components/ui/icons'

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
    </main>
  )
}
