import styled from "styled-components";

export const StyledMainContainer = styled.main `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media(min-width: 769px) {
    flex-direction: row;
  
    .buttonAdd:hover {
      background-color: var(--color-primary-50);
      transition: 1s ease;
    }
  }
`