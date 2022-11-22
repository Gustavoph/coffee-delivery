import { w } from 'windstitch'

export const CoffeeContainer = w.div('flex px-1 py-2')

export const Divider = w.hr('text-base-button my-6')

export const Button = w.button('text-purple')

export const ButtonContainer = w.div(
  'flex h-[32px] items-center rounded px-2 py-3 bg-base-button gap-2',
)

export const CoffeeImage = w.img('w-16 h-16 mr-5')

export const CoffeeQuantity = w.span('text-text-m text-base-title')

export const CoffeeName = w.p('text-text-m text-base-subtitle')

export const CoffeePrice = w.p('text-base-text text-text-m font-bold')

export const PriceContainer = w.div('w-full flex justify-end')

export const ButtonRemove = w.button(
  'flex h-[32px] gap-x-1 px-2 items-center bg-base-button rounded text-[12px] text-base-text',
)
