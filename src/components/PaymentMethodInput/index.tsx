import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
  id: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type='radio' {...props} name='paymentMethod' ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
