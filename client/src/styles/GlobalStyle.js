import { createGlobalStyle } from 'styled-components/macro';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    html {
        box-sizing: border-box;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        font-family: var(--font-main);
        font-size: var(--fz-md);
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-acc);
        margin: 0 0 10px;
    }

    a, button {
        transition: all 0.3s ease;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;