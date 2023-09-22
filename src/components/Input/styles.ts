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

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transition: 400ms;

  font-size: 0.875rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};

  &:focus {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
