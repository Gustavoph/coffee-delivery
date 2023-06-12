import Image from 'next/image'
import { Title } from '@/components/ui/Title'

import coffeeBg from '@/assets/coffee-bg.png'
import express from '@/assets/express.png'
import { Text } from '@/components/ui/Text'
import { ShoppingCart, Package, Coffee, Timer } from '@/components/ui/icons'
import { CatalogCoffeeCard } from '@/components/CatalogCoffeeCard'

export default function Home() {
  return (
    <section className="h-[544px] w-full gap-14">
      <div className="flex items-center justify-center gap-14 pb-12 pt-24">
        <div className="flex w-[588px] flex-col">
          <Title className="mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <Text size="xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
          <div className="mt-16 flex gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark">
                  <ShoppingCart weight="fill" className="text-white" />
                </div>
                <Text>Compra simples e segura</Text>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-base">
                  <Timer weight="fill" className="text-white" />
                </div>
                <Text>Entrega rápida e rastreada</Text>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-base-text">
                  <Package weight="fill" className="text-white" />
                </div>
                <Text>Embalagem mantém o café intacto</Text>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-base">
                  <Coffee weight="fill" className="text-white" />
                </div>
                <Text>O café chega fresquinho até você</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[360px] w-[476px]">
          <Image src={coffeeBg} width={476} height={360} alt="Coffee" />
        </div>
      </div>

      <div className="flex-start flex flex-col py-8">
        <Title size="3xl">Nossos cafés</Title>

        <div className="mt-14 w-full">
          <CatalogCoffeeCard
            coffee={{
              amount: 9.9,
              description:
                'O tradicional café feito com água quente e grãos moídos',
              id: '1',
              imageUrl: express.src,
              name: 'Expresso Tradicional',
            }}
          />
        </div>
      </div>
    </section>
  )
}
