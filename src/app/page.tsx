import { Input } from '@/components/Form/Input'

export default function Home() {
  return (
    <main className="p-4">
      <div className="font-roboto">Hello World</div>

      <Input placeholder="Label" optional />
    </main>
  )
}
