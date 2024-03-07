import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: 'Bree Serif', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, ol{
    list-style: none;
  }
`

export default GlobalStyle;