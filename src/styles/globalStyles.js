import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
  
  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --white-fixed: #FFFFFF;
    --color-negative: #E60000;
    --color-susses: #168821;
    --radius-default: 0.5rem;
    --radius-card: 0.3125rem;
    --font-default: 'Inter', sans-serif;
  }

  body {
    background-color: var(--white-fixed);
    font-family: var(--font-default);
    cursor: default;
  }

  body::-webkit-scrollbar{
    background-color: var(--white-fixed);
    width: 14px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    width: 14px;
  }
`