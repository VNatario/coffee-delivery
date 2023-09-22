import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
  id: string
}

// export function PaymentMethodInput({
//   id,
//   icon,
//   label,
//   ...props
// }: PaymentMethodInputProps) {
//   return (
//     <PaymentMethodContainer>
//       <input id={id} type='radio' {...props} name='paymentMethod' />
//       <label htmlFor={id}>
//         <ContentContainer>
//           {icon}
//           {label}
//         </ContentContainer>
//       </label>
//     </PaymentMethodContainer>
//   )
// }

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => (
  <PaymentMethodContainer>
    <input id={id} type='radio' {...props} name='paymentMethod' ref={ref} />
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentMethodContainer>
))
