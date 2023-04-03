import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem;
  background-color: var(--grey-0);

  div {
    display: flex;
    flex-direction: column;
    height: 135px;
    gap: 1rem;
    width: 100%;
  }

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
    width: 290px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 82px;


    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 97%;
      height: 100%;

      
      img {
        margin-left: 1rem;
      }

      form {
        align-self: flex-end;

        button:hover {
         background-color: var(--color-primary-50);
          transition: 1s ease;
        }
      }
    }


   
  }

`

