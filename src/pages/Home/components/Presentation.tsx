import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Presentation() {
  return (
    <section className="h-full py-24 flex items-center justify-between gap-14">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-base-title text-title-xl leading-none">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="text-base-subtitle text-text-l">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-dark rounded-full w-8 h-8 p-2">
              <ShoppingCart weight="fill" size={16} className="text-white" />
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
      </div>

      <img
        src="/coffee.svg"
        alt="Copo de café com grão de cafẽo ao seu redor"
      />
    </section>
  )
}
