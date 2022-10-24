import * as S from './styles'
import logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Home() {
  return (
    <S.HomeContainer>
      <S.HomeContent>
        <img src={logo} alt="" />

        <S.CartContainer>
          <div>
            <MapPin color="#4B2995" size={20} weight="fill" />
            <span>Maringá, PR</span>
          </div>

          <button>
            <ShoppingCart color="#C47F17" size={20} weight="fill" />
          </button>
        </S.CartContainer>
      </S.HomeContent>
    </S.HomeContainer>
  )
}
