import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 1.3;
    font-size: ${({ theme }) => theme.textSizes['text-m']};

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.purple};
  transition: 400ms;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
