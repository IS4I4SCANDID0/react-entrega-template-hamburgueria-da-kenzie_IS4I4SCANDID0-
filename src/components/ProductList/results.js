import styled from "styled-components";

export const StyledResultDesc = styled.div `
  display: flex;
  margin: 1rem 0 0 1rem;
  max-width: 88%;
  

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--grey-100);
  }

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--grey-50);
    margin-left: 0.4rem;
  }
  
  button {
    display: none;
  }

  @media(min-width: 769px) {
    max-width: 96.5%;
    height: 45px;
    position: relative;
    align-items: center;

    button {
      display: inline-flex;
      position: absolute;
      right: 0;
      background-color: var(--color-primary);
      color: var(--white-fixed);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: var(--radius-default);
      font-weight: 500;
      font-size: 0.875rem;
    }
  }
`
  



