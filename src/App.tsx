import { BrowserRouter } from 'react-router-dom'
import { CoffeeProvider } from './context/coffee'

import { Router } from './routes'
import './styles/global.css'

export function App() {
  return (
    <CoffeeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CoffeeProvider>
  )
}
