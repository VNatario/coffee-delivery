import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
  id: string
}

export function PaymentMethodInput({
  id,
  icon,
  label,
  ...props
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      <input id={id} type='radio' {...props} name='paymentMethod' />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
