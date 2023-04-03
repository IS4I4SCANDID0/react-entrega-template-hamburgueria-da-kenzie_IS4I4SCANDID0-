import styled from "styled-components";

export const StyledBagSection = styled.section`
  width: 320px;
  max-height: 470px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);
  margin: 0 0 1rem 1rem;


  h3 {
    width: 100%;
    height: 4.0625rem;
    text-align: flex-start;
    padding: 1rem;
    border-top-left-radius: var(--radius-card);
    border-top-right-radius: var(--radius-card);
    background-color: var(--color-primary);
    font-size: 1.125rem;
    fon-wight: 700;
    color: var(--white-fixed);
  }

  ul {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: solid 3px var(--grey-20);
    overflow-y: scroll;
  }

  li {
    display: flex;
    background-color: transparent;
    width: 100%;
    height: 75px;
    gap: 1rem;
    position: relative;

    .imgContainer {
      width: 75px;
      height: 75px;
      background-color: var(--grey-20);
      border-radius: var(--radius-card);

      img{
        width: 75px;
        height: 75px;
        object-fit: cover;
      }
    }

    h2 {
      width: 80px;
      font-size: 0.9rem;
      font-weight: 700;
      color: var(grey-100);
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.70rem;
      font-weight: 400;
      color: var(--grey-50);
    }

    button {
      background-color: transparent;
      font-size: 0.75rem;
      color: var(--grey-50);
      position: absolute;
      top: 3px;
      right: 0;
    }
  }

  .container__sumBag {
    height: 160px;
    padding: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--grey-100);
    }

    span {
      font-size: 1rem;
      color: var(--grey-50);
      font-weight: 600;
    }

    button {
      width: 100%;
      background-color: var(--grey-20);
      color: var(--grey-50);
      font-size: 1rem;
      font-weight: 600;
      padding: 1rem;
      border-radius: var(--radius-card);
    }
  }
    
   
  .emptyMessage {
    padding: 1rem;
    text-align: center;
    width: 100%;
    margin: 0;

    h4 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--grey-50);
    }
  }

  @media(min-width: 769px) {
    align-self: flex-start;
    width: 320px;
    margin-top: 1rem;
  }  

  ul {
    padding: 1rem;
    width: 100%;
  }

  ul::-webkit-scrollbar {
    background-color: var(--grey-0);
    width: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    width: 10px;
  }

  .emptyMessage {
    height: 159px;
    
    h4{
      margin: 1.5rem 0 1rem 0;
    }
  }
`