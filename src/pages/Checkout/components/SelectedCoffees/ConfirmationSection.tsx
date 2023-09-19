import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText $size='s' $color='text'>
          Total de itens
        </RegularText>
        <RegularText $color='text'>R$ 9,90</RegularText>
      </div>
      <div>
        <RegularText $size='s' $color='text'>
          Entrega
        </RegularText>
        <RegularText $color='text'>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText $size='l' $color='subtitle' $weight='700'>
          Total
        </RegularText>
        <RegularText $size='l' $color='subtitle' $weight='700'>
          R$ 33,20
        </RegularText>
      </div>
    </ConfirmationSectionContainer>
  )
}
