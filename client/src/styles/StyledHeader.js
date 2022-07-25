import styled from "styled-components/macro";

const StyledHeader = styled.section`
    display: flex;
    position: relative;
    min-height: 250px;
    margin-top: var(--spacing-md);

    @media (min-width: 768px) {
        min-height: 200px;
        margin-bottom: var(--spacing-xl);
    }

    .header-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--site-max-width);
        margin: 0 auto;

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: flex-end;
            width: 100%;
            margin: 0 auto;
        }
    }

    img.header-img {
        width: 20%;
        max-width: 150px;
        min-width: 120px;
        background-color: var(--black);
        border-radius: ${props => props.type === 'user' ? '50%' : '0'};
        margin-bottom: var(--spacing-md);

        @media (min-width: 768px) {
            margin: 0;
            margin-right: var(--spacing-xl);
        }
    }

    .header-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        @media (min-width: 768px) {
            align-items: flex-start;
        }
    }

    h1.header-name {
        font-size: clamp(var(--font-size-xxl), 10vw, var(--font-size-xxxl));
        font-weight: 900;
        line-height: 1;
        margin: 0 0 var(--spacing-md) 0;

        @media (min-width: 768px) {
            margin: 0 0 var(--spacing-md) -5px;
        }
    }

    .header-meta {
        display: flex;
        align-items: center;
        font-size: var(--font-size-md);
        color: var(--off-white);
        margin: 0;

        span {
            display: flex;
            align-items: center;

            &:not(:last-of-type)::after {
                content: '•';
                display: block;
                margin: 0 var(--spacing-xs);
                color: var(--off-white);
                font-size: var(--font-size-xs);
            }
        }
    }
`;

export default StyledHeader;