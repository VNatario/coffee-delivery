import { PaymentMethodInput } from '../../../../components/PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}
