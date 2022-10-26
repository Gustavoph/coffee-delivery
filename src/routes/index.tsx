import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Checkout } from '@/pages/Checkout'
import { DefaultLayout } from './layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
