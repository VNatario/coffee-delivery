import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQauntity, removeCartItem } = useCart()

  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formatedPrice = formatMoney(coffeeTotalPrice)

  function handleIncrease() {
    changeCartItemQauntity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQauntity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.photo} />
        <div>
          <RegularText $color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size='sm'
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formatedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
