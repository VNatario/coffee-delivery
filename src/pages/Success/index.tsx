import { RegularText, TitleText } from '../../components/Typography'
import { OrderDetailsContainer, SuccessContainer } from './styles'
import confirmedOrder from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Success() {
  const { colors } = useTheme()
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
                Entraga em <strong>Rua Benvinda Lima Corrêia, 36</strong>
                <br />
                Farrapos - Suzano, SP
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
                <strong>Cartão de Crédito</strong>
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
