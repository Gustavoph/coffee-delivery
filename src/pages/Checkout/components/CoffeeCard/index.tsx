import { Minus, Plus, Trash } from 'phosphor-react'

import * as S from './styles'
import { priceFormatter } from '@/utils/formater'

interface CoffeeCardProps {
  id: number
  name: string
  photo: string
  price: number
}

export function CoffeeCard({ id, name, photo, price }: CoffeeCardProps) {
  return (
    <>
      <S.CoffeeContainer>
        <S.CoffeeImage alt={name} src={`/coffees/${photo}`} />

        <div className="mr-10 space-y-2">
          <S.CoffeeName>{name}</S.CoffeeName>
          <div className="flex gap-x-2">
            <S.ButtonContainer>
              <S.Button>
                <Minus size={14} />
              </S.Button>
              <S.CoffeeQuantity>1</S.CoffeeQuantity>
              <S.Button>
                <Plus size={14} />
              </S.Button>
            </S.ButtonContainer>

            <S.ButtonRemove>
              <Trash size={14} className="text-purple" />
              <span>Remover</span>
            </S.ButtonRemove>
          </div>
        </div>

        <S.PriceContainer>
          <S.CoffeePrice>{priceFormatter.format(price)}</S.CoffeePrice>
        </S.PriceContainer>
      </S.CoffeeContainer>
      <S.Divider />
    </>
  )
}
