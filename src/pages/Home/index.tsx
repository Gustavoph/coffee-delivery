import { OurCafes, Presentation } from './components'

export function Home() {
  return (
    <main className="mt-[104px] h-[544px] bg-coffee-cover bg-cover bg-center">
      <div className="h-full mx-auto max-w-[1120px]">
        <Presentation />
        <OurCafes />
      </div>
    </main>
  )
}
