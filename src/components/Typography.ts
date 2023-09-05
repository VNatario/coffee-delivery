import { css, styled } from 'styled-components'

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

interface RegularTextProps {
  color?: 'label' | 'text' | 'subtitle'
  size?: 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 1.3;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.h1<RegularTextProps>`
  ${({ theme, color, size, weight }) => css`
    color: ${theme.colors[`base-${color ?? 'title'}`]};
    font-size: ${theme.textSizes[`text-${size ?? 'm'}`]};
    font-family: ${theme.fonts.regular};
    line-height: 1.3;
    font-weight: ${weight ?? 400};
  `}
`
