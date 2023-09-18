import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  & > p {
    font-weight: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button``
