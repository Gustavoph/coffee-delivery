import { createContext, ReactNode, useState } from 'react'

export type Coffee = {
  id: number
  name: string
  price: number
  photo: string
  tags: string[]
  description: string
}

interface CoffeeContextData {
  coffees: Coffee[]
  addCoffee: (newCoffe: Coffee) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  function addCoffee(newCoffe: Coffee) {
    setCoffees((state) => [...state, newCoffe])
  }

  return (
    <CoffeeContext.Provider value={{ coffees, addCoffee }}>
      {children}
    </CoffeeContext.Provider>
  )
}
