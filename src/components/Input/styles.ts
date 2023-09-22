import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;

  & > p {
    color: ${({ theme }) => theme.colors.error};
    margin-left: 0.25rem;
  }
`

export const InputStyleContainer = styled.div`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 400ms;
  overflow: hidden;

  //quando o elemento dentro da div estiver com focus recebe este evento
  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`
