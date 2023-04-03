import styled from "styled-components";

export const StyledListProduct = styled.ul `
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  overflow-x: scroll;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 300px;
    min-height: 310px;
    border: solid 2px var(--grey-20);
    border-radius: var(--radius-card);


    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--grey-0);
      width: 100%;
      height: 153px;
      border-top-left-radius: var(--radius-card);
      border-top-right-radius: var(--radius-card);
    }

    img{
      max-width: 175px;
      max-height: 175px;
      align-self: center;
      object-fit: cover;
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-100);
      padding: 2rem 0 1rem 1rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--grey-50);
      padding: 0 0 0.5rem 1rem;
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-primary);
      padding: 0 0 0.5rem 1rem;
    }

    button {
      background-color: var(--color-primary);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--white-fixed);
      margin: 0 0 1rem 1rem;
      padding: 0.5rem 1.5rem;
      border-radius: var(--radius-default);
    }
  }

  @media(min-width: 769px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    max-width: 75%;
    max-height: 70%;
    
    li {
      min-width: 290px;
    }
  
  }

` 