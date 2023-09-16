import { MapPinLine } from '@phosphor-icons/react'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size='xs' color='subtitle'>
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
          icon={<MapPinLine size={22} color={colors['yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
