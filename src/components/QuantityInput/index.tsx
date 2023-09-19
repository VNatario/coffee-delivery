import { Minus, Plus } from '@phosphor-icons/react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'sm' | 'm'
}

export function QuantityInput({ size = 'm' }: QuantityInputProps) {
  return (
    <QuantityInputContainer $size={size}>
      <IconWrapper>
        <Minus size={14} weight='bold' />
      </IconWrapper>

      <input type='number' readOnly value={1} />

      <IconWrapper>
        <Plus size={14} weight='bold' />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
