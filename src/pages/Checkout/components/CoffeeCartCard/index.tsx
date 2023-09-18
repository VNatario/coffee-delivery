import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1695600000&Signature=awrzDjEJdw192BHNGCrioN3N2kKYuwh8yzvloSUaElwZVD8837nWzketszr1Jvu8glQSYqnb24uyyPPDGfrhBRsaTr4vA9V3CAC~3caoSZO~a-hCmKRRo7eCBrP6n8ojwpQaV6PdW6EBu9XeLa-NgJjAX3pk1k0bvFBK8H57KlLEyOU4iF9vvBzrLW~R1w4Njv-2aE9EhPbfRUMtf0rh~E0zv2DovCTbQ3suFX5TwhphYuifu~dnV7rICvbKs5a~bxCbjxBuSkrBY0chrjx2fYMN0zmrkj0n9R3bYGcMmnhzFGDyLFeYz6qekQ3ATfwXHDAoh77Gb1FvK-rtTtQ5Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        <div>
          <RegularText $color='subtitle'>Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size='sm' />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
