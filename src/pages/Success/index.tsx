import { RegularText, TitleText } from '../../components/Typography'
import { OrderDetailsContainer, SuccessContainer } from './styles'
import confirmedOrder from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <SuccessContainer className='container'>
      <div>
        <TitleText $size='l'>Uhu! Pedido confirmado</TitleText>
        <RegularText $size='l' $color='subtitle'>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors.purple}
            icon={<MapPin weight='fill' />}
            text={
              <RegularText $color='text'>
                Entraga em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors.yellow}
            icon={<Timer weight='fill' />}
            text={
              <RegularText $color='text'>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors['yellow-dark']}
            icon={<CurrencyDollar />}
            text={
              <RegularText $color='text'>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img
          src={confirmedOrder}
          alt='pessoa dirigindo uma moto, indo fazer uma intrega da Coffee Delivery'
        />
      </section>
    </SuccessContainer>
  )
}
