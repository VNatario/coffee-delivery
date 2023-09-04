import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  position: relative;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.textSizes['text-s']};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['purple']};
      }
    `}
`
