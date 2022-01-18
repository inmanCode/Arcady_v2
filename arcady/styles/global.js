import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ::selection {
    background: rgba(0,166,103,0.3);
  }
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    ::selection {
    background: rgba(0,166,103,0.3);
}
}
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: #fff;
    color: #333132;
    cursor: default;
    overflow-x: hidden;

  
    }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;