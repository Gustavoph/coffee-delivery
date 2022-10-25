import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { priceFormatter } from '../utils/formater'

interface CoffeeCardProps {
  url: string
  name: string
  value: number
  tags: string[]
  description: string
}

export function CoffeeCard({
  tags,
  url,
  name,
  value,
  description,
}: CoffeeCardProps) {
  return (
    <div className="w-64 h-72 bg-base-card card-radius px-6 flex flex-col justify-start items-center space-y-4">
      <img src={url} className="-mt-5" alt="imagem café expresso tradicional" />

      <header className="bg-yellow-light rounded-[100px] px-2 py-1">
        <p className="text-tag text-yellow-dark font-bold">{tags[0]}</p>
      </header>

      <section className="text-center">
        <h2 className="text-base-subtitle text-title-s">{name}</h2>
        <p className="text-base-label text-text-s">{description}</p>
      </section>

      <footer className="flex w-full items-center justify-between">
        <h3 className="text-base-text text-title-m font-bold">
          <span className="text-text-s">R$</span> {priceFormatter.format(value)}
        </h3>

        <div className="flex gap-2">
          <div className="flex h-10 items-center rounded px-2 py-3 bg-base-button gap-2">
            <button>
              <Minus size={14} className="text-purple" />
            </button>
            <span className="text-text-m text-base-title">1</span>
            <button>
              <Plus size={14} className="text-purple" />
            </button>
          </div>

          <button className="flex items-center justify-center w-10 h-10 bg-purple-dark rounded-md">
            <ShoppingCart weight="fill" size={22} className="text-white" />
          </button>
        </div>
      </footer>
    </div>
  )
}
