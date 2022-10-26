import { coffees } from '@/data/coffees'
import { CoffeeCard } from '@/components'

export function OurCafes() {
  return (
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
  )
}
