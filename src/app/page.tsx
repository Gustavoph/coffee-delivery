import Image from 'next/image'

import { Title } from '@/components/ui/Title'

import coffeeBg from '@/assets/coffee-bg.png'
import { Text } from '@/components/ui/Text'

export default function Home() {
  return (
    <section className="flex w-full gap-14 pt-24">
      <div className="flex flex-col">
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Text size="xl">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>
      </div>

      <div className="h-[360px] w-[476px]">
        <Image src={coffeeBg} width={476} height={360} alt="Coffee" />
      </div>
    </section>
  )
}
