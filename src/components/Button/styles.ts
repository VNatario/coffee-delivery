import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.textSizes['button-g']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 400ms;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
