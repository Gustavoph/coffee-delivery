import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '@/context/cartContext'

export function Header() {
  const { coffees } = useCart()

  return (
    <header className="w-full fixed inset-0 h-[104px] bg-white">
      <div className="flex items-center justify-between h-full mx-auto max-w-[1120px]">
        <Link to="/">
          <img src="/logo.svg" alt="Logo coffee delivery" />
        </Link>

        <nav className="flex gap-3">
          <div className="flex items-center justify-center gap-1 bg-purple-light rounded-md px-2">
            <MapPin weight="fill" size={22} className="text-purple-dark" />
            <span className="text-text-s text-purple-dark">Maringá, PR</span>
          </div>

          <Link to="/checkout">
            <button className="relative flex items-center justify-center w-10 h-10 bg-yellow-light rounded-md ">
              {coffees.length > 0 && (
                <div className="absolute flex items-center justify-center -top-1 -right-2 w-5 h-5 rounded-full bg-yellow-dark text-[12px] font-bold text-base-button">
                  {coffees.length}
                </div>
              )}
              <ShoppingCart
                weight="fill"
                size={22}
                className="text-yellow-dark"
              />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
