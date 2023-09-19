import { Minus, Plus } from '@phosphor-icons/react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'sm' | 'm'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'm',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer $size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight='bold' />
      </IconWrapper>

      <input type='number' readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight='bold' />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
