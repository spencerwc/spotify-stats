import { css } from 'styled-components/macro';

const fonts = css`
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/montserrat/montserrat-v25-latin-regular.woff2') format('woff2'), 
             url('../fonts/montserrat/montserrat-v25-latin-regular.woff') format('woff'); 
        font-display: fallback;
    }
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/montserrat/montserrat-v25-latin-700.woff2') format('woff2'), 
             url('../fonts/montserrat/montserrat-v25-latin-700.woff') format('woff'); 
        font-display: fallback;
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/lato/lato-v23-latin-regular.woff2') format('woff2'), 
             url('../fonts/lato/lato-v23-latin-regular.woff') format('woff');
        font-display: fallback;
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/lato/lato-v23-latin-700.woff2') format('woff2'), 
             url('../fonts/lato/lato-v23-latin-700.woff') format('woff');
        font-display: fallback;
    }
`;

export default fonts;