import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

import { Header } from '../../components/Header'
import { coffees } from '../../mock/coffees'
import coffee from '../../assets/coffee.svg'

export function Home() {
  return (
    <div className="w-full h-full">
      <Header />

      <main className="w-full mt-[104px] h-[544px] bg-coffee-cover bg-cover bg-no-repeat bg-center">
        <div className="mx-auto max-w-[1120px]">
          <section className="w-full h-[544px] pt-24 pb-28 flex items-center justify-between gap-14">
            <section className="space-y-16">
              <div className="space-y-4">
                <h1 className="text-base-title text-title-xl leading-none">
                  Encontre o café perfeito
                  <br /> para qualquer hora do dia
                </h1>

                <p className="text-base-subtitle text-text-l">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  <br />
                  qualquer hora
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-dark rounded-full w-8 h-8 p-2">
                    <ShoppingCart
                      weight="fill"
                      size={16}
                      className="text-white"
                    />
                  </div>
                  <p className="text-base-text text-text-m">
                    Compra simples e segura
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-base-text rounded-full w-8 h-8 p-2">
                    <Package weight="fill" size={16} className="text-white" />
                  </div>
                  <p className="text-base-text text-text-m">
                    Embalagem mantém o café intacto
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-yellow rounded-full w-8 h-8 p-2">
                    <Timer weight="fill" size={16} className="text-white" />
                  </div>
                  <p className="text-base-text text-text-m">
                    Entrega rápida e rastreada
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple rounded-full w-8 h-8 p-2">
                    <Coffee weight="fill" size={16} className="text-white" />
                  </div>
                  <p className="text-base-text text-text-m">
                    O café chega fresquinho até você
                  </p>
                </div>
              </div>
            </section>

            <img src={coffee} alt="" />
          </section>

          <section className="pb-28 space-y-14">
            <h1 className="text-base-subtitle text-title-l">Nossos cafés</h1>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-8">
              {coffees.map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  tags={coffee.tags}
                  name={coffee.name}
                  price={coffee.price}
                  photo={coffee.photo}
                  description={coffee.description}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
