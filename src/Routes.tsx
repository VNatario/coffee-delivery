import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CheckoutPage } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>
  )
}
