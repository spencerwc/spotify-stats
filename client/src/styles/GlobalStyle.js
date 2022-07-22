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
        font-size: var(--font-size-md);
        color: var(--white);
        background-color: var(--dark-grey);
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

    button {
        cursor: pointer;
        font-family: var(--font-acc);
        color: var(--white);
        font-size: var(--font-size-sm);
        font-weight: 700;
        background-color: var(--black);
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius-pill);
        border: none;
        outline: none;

        &:hover, &:focus {
            background-color: var(--grey);
        }
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }
`;

export default GlobalStyle;