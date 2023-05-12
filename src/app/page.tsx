import { Input } from '@/components/Form/Input'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <main className="p-4">
      <div className="font-roboto">Hello World</div>

      <Input placeholder="Label" optional />

      <Button>Teste</Button>
    </main>
  )
}
