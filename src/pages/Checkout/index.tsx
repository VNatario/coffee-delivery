import { CompleteOrderForm } from './CompleteOrderForm'
import { CheckoutContainer } from './styles'

export function CheckoutPage() {
  return (
    <CheckoutContainer className='container'>
      <CompleteOrderForm />
    </CheckoutContainer>
  )
}
