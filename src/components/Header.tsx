import cx from 'classnames'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="w-full fixed inset-0 h-[104px] bg-white">
      <div className="h-full mx-auto max-w-[1120px] flex items-center justify-between">
        <img src="/logo.svg" alt="Logo coffee delivery" />

        <nav className="flex gap-3">
          <div className="flex items-center justify-center gap-1 bg-purple-light rounded-md px-2">
            <MapPin weight="fill" size={22} className="text-purple-dark" />
            <span className="text-text-s text-purple-dark">Maringá, PR</span>
          </div>

          <button
            className={cx(
              'flex items-center justify-center w-10 h-10',
              'hover:bg-yellow bg-yellow-light rounded-md',
            )}
          >
            <ShoppingCart
              weight="fill"
              size={22}
              className="text-yellow-dark hover:text-white"
            />
          </button>
        </nav>
      </div>
    </header>
  )
}
