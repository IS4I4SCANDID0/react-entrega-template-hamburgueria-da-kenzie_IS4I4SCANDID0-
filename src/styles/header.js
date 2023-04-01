import styled from "styled-components";

export const StyledHeader = styled.header `
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  img{
    width: 158px;
    height: 35px;
    align-self: center;
  }

  form {
    display: inline-flex;
    justify-content: space-between;
    align-self: center;
    border: solid 2px var(--grey-20);
    width: 295px;
    height: 50px;
    border-radius: var(--radius-default);
  }
`
// ***  CONTINUAR ASSISTIR A PROMEIRA DEMO DA SPRINT 2 