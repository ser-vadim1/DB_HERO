import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
html {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   overflow-x: hidden;
   };
 }
 *, *:after, *:before {
    -webkit-box-sizing: inherit;
      box-sizing: inherit;
 }
  body {
    height: 100%;
    margin: 0;
    font-family: 'Amatic SC', cursive;
  }
`