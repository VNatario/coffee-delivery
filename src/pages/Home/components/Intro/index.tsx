import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from '../../../../assets/intro-img.svg'
import { RegularText } from '../../../../components/Typography'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size='xl'>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size='l' color='subtitle' as='h3'>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <p>beneficio</p>
            <p>beneficio</p>
            <p>beneficio</p>
            <p>beneficio</p>
          </BenefitsContainer>
        </div>
        <img src={introImg} alt='' />
      </IntroContent>
    </IntroContainer>
  )
}
