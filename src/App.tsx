import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext'

import { Router } from './routes'
import './styles/global.css'

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}
