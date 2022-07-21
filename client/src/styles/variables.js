import { css } from "styled-components";

const variables = css`
    :root {
        --white: #ffffff;
        --black: #191414;
        --green: #1DB954;
        --light-grey: #b3b3b3;
        --grey: #535353;
        --dark-grey: #282828;

        --font-main: 'Lato', sans-serif;
        --font-acc: 'Montserrat', sans-serif;
        
        --font-size-xxxl: 3.05rem;
        --font-size-xxl: 2.44rem;
        --font-size-xl: 1.95rem;
        --font-size-lg: 1.56rem;
        --font-size-base: 16px;
        --font-size-sm: 0.8rem;
        --font-size-xs: 0.64rem;
        --font-size-xxs: 0.512rem;
        
        --spacing-xxl: 64px;
        --spacing-xl: 32px;
        --spacing-lg: 24px;
        --spacing-md: 16px;
        --spacing-sm: 12px;
        --spacing-xs: 8px;
        --spacing-xxs: 4px;

        --border-radius-subtle: 4px;
        --border-radius-pill: 30px;

        --site-max-width: 1300px;
    }
`;

export default variables;