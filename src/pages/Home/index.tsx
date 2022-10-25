import { ShoppingCart, MapPin, Package, Timer, Coffee } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import coffee from '../../assets/coffee.svg'
import expresso from '../../assets/expresso.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[104px] mx-auto max-w-[1120px]">
        <header className="w-full h-full flex items-center justify-between">
          <img src={logo} alt="" />

          <nav className="flex gap-3">
            <div className="flex items-center justify-center gap-1 bg-purple-light rounded-md px-2">
              <MapPin weight="fill" size={22} className="text-purple-dark" />
              <span className="text-text-s text-purple-dark">Maringá, PR</span>
            </div>

            <button className="flex items-center justify-center w-10 h-10 bg-yellow-light rounded-md">
              <ShoppingCart
                weight="fill"
                size={22}
                className="text-yellow-dark"
              />
            </button>
          </nav>
        </header>
      </div>

      <main className="w-full h-[544px] bg-coffee-cover bg-cover bg-no-repeat bg-center">
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

            <div className="grid grid-cols-4 gap-y-10 gap-x-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((coffee) => (
                <CoffeeCard
                  key={coffee}
                  value={9.99}
                  url={expresso}
                  tags={['TRADICIONAL']}
                  name="Expresso Tradicional"
                  description="O tradicional café feito com água quente e grãos moídos"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
