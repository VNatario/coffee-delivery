import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodInput } from '../../../../components/PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          icon={icon}
          label={label}
          value={key}
          id={key}
        />
      ))}
    </PaymentMethodOptionsContainer>
  )
}
