import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { priceFormatter } from '@/utils/formater'

interface CoffeeCardProps {
  name: string
  price: number
  photo: string
  tags: string[]
  description: string
}

export function CoffeeCard({
  tags,
  name,
  photo,
  price,
  description,
}: CoffeeCardProps) {
  return (
    <div className="w-64 min-h-72 pb-5 bg-base-card card-radius px-6 flex flex-col justify-start items-center space-y-4">
      <img src={`/coffees/${photo}`} className="-mt-5" alt={description} />

      <header className="flex gap-1 flex-wrap">
        {tags?.map((tag) => (
          <p key={tag} className="bg-yellow-light rounded-[100px] px-2 py-1 ">
            <span className="block text-tag text-yellow-dark font-bold">
              {tag}
            </span>
          </p>
        ))}
      </header>

      <section className="text-center">
        <h2 className="text-base-subtitle text-title-s">{name}</h2>
        <p className="text-base-label text-text-s">{description}</p>
      </section>

      <footer className="flex w-full items-center justify-between">
        <h3 className="text-base-text text-title-m font-bold">
          <span className="text-text-s">R$</span> {priceFormatter.format(price)}
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

          <button className="hover:bg-purple transition duration-300 flex items-center justify-center w-10 h-10 bg-purple-dark rounded-md">
            <ShoppingCart weight="fill" size={22} className="text-white" />
          </button>
        </div>
      </footer>
    </div>
  )
}
