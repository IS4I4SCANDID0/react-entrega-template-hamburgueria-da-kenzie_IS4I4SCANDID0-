import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 135px;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--grey-0);

  img{
    width: 158px;
    height: 35px;
    align-self: center;
  }

  form {
    display: inline-flex;
    justify-content: space-between;
    align-self: center;
    padding: 0.5rem;
    border: solid 1.5px var(--grey-20);
    width: 325px;
    height: 55px;
    border-radius: var(--radius-default);
    background-color: var(--white-fixed);

    input {
      padding: 0.2rem;
      background-color: var(--whit-fixed);
      background: none;
    }

    input::placeholder {
      color: var(--grey-20);
    }

    input::focus {
      border: none;
    }

    form::focus {
      border-color: var(--grey--100);
    }

    button {
      background-color: var(--color-primary);
      border-radius: var(--radius-default);
      padding: 0 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--white-fixed);
    }
  }
  
  @media(min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    height: 70px;

    img{
      margin-left: 3rem;
    }

    form {
      margin-right: 6.2rem;
    }
  }

`

