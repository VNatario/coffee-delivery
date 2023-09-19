import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  min-width: 32rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  /* Aplicando borda com gradiente */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px;
    z-index: -1;
    background: ${({ theme }) => css`
      linear-gradient(
        102.89deg, ${theme.colors.yellow} 2.61%, ${theme.colors.purple} 98.76%
      )
    `};
  }
`
