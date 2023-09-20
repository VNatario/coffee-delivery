import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const deliveryPrice = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = deliveryPrice + cartItemsTotal

  const formatedDeliveryPrice = formatMoney(deliveryPrice)
  const formatedTotalItensValue = formatMoney(cartItemsTotal)
  const formatedTotal = formatMoney(cartTotal)
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText $size='s' $color='text'>
          Total de itens
        </RegularText>
        <RegularText $color='text'>R$ {formatedTotalItensValue}</RegularText>
      </div>
      <div>
        <RegularText $size='s' $color='text'>
          Entrega
        </RegularText>
        <RegularText $color='text'>R$ {formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText $size='l' $color='subtitle' $weight='700'>
          Total
        </RegularText>
        <RegularText $size='l' $color='subtitle' $weight='700'>
          R$ {formatedTotal}
        </RegularText>
      </div>

      <Button text='Confirmar Pedido' disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
