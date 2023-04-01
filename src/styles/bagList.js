import styled from "styled-components";

export const StyledBagSection = styled.section `
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);
  align-self: center;

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
    background-color: red;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1.5rem;
  }

  li {
    display: flex;
    background-color: aqua;
    width: 100px;

    .imgContainer {
      width: 80px;
      height: 80px;

      img{
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }
  }
`