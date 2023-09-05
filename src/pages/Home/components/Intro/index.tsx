import { IntroContainer, IntroContent } from './styles'
import introImg from '../../../../assets/intro-img.svg'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section></section>
        </div>
        <img src={introImg} alt='' />
      </IntroContent>
    </IntroContainer>
  )
}
