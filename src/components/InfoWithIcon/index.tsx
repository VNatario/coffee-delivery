import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoWithIcon({ icon, iconBg, text }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer $iconbg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
