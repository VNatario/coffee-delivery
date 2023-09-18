import { PaymentMethodContainer } from './styles'
import { CreditCard } from '@phosphor-icons/react'

export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  )
}
