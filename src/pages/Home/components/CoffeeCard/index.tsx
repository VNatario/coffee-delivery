import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694995200&Signature=LGbi8S5SH38Zye-LASM1wzuxAgLcHoKn6eeXTpr8rCrRIsbmEa-9J2AOs9aBPm54KYV153wrR3S3WQje2us2Pk32MI-RmdbUr~nlgjlogoaOGtP9LiNbyWjkybKObgT37U2-eOwmkibR-YGI~Adrg5Y94Jtk6NIDHhPex8JuxYdDUVeNYJII3d4jzb8~A~oLuXi5ZL8lcJZ15NBujNHaXNiKMqKVNHsXke3jd~C4PuFkfYXd21-Cv~3~i1UvZ3rOlmTNBLM7ILnp4eJfhvPGzgfAeQqaBjRFPq3auPIZ3iqsVxgEyw6zD0U0r8N2a3OXGWZ7GLkSagBJnfkW~SSUeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />

      <Tags>
        <span>Tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            9,90
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
