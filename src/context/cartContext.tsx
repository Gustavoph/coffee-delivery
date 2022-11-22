import { createContext, ReactNode, useContext, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  price: number
  photo: string
  tags: string[]
  description: string
}

export interface CartCoffee extends Coffee {
  quantity: number
}

interface CartContextData {
  coffees: CartCoffee[]
  increaseCoffee: (coffeeId: number) => void
  decreaseCoffee: (coffeeId: number) => void
  addCoffee: (newCoffe: Coffee) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffees, setCoffees] = useState<CartCoffee[]>([])

  function addCoffee(newCoffee: Coffee) {
    const coffeeIndex = coffees.findIndex(
      (coffee) => coffee.id === newCoffee.id,
    )
    if (coffeeIndex === -1) {
      setCoffees((state) => [
        ...state,
        { ...newCoffee, quantity: 1 } as CartCoffee,
      ])
    }
  }

  function increaseCoffee(coffeeId: number) {
    const coffeesCopy = JSON.parse(JSON.stringify(coffees)) as CartCoffee[]

    coffeesCopy.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.quantity += 1
      }

      return coffee
    })

    setCoffees((state) => [...coffeesCopy])
  }

  function decreaseCoffee(coffeeId: number) {
    const coffeesCopy = JSON.parse(JSON.stringify(coffees)) as CartCoffee[]

    coffeesCopy.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.quantity -= 1
      }

      return coffee
    })

    setCoffees((state) => [...coffeesCopy])
  }

  return (
    <CartContext.Provider
      value={{ coffees, addCoffee, increaseCoffee, decreaseCoffee }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
