import { InputHTMLAttributes, forwardRef } from 'react'
import { InputStyleContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

// export function Input({ ...props }: InputProps) {
//   return <InputStyleContainer {...props} />
// }

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputStyleContainer {...props} ref={ref} />
})
