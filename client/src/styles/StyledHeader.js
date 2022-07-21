import styled from "styled-components/macro";

const StyledHeader = styled.header`
    display: flex;
    position: relative;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
    background-color: var(--grey);
    max-height: 500px;
    min-height: 250px;

    @media (min-width: 768px) {
        height: 20vh;
        min-height: 340px;
    }

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 20vh;
        background: linear-gradient(rgba(0, 0, 0, 0.3), transparent);
        position: absolute;
        top: 100%;
        z-index: -1;
    }

    .header-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--site-max-width);
        margin: 0 auto;
        padding: var(--spacing-xxl) var(--spacing-md);

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: flex-end;
            width: 100%;
            margin: 0 auto;
            padding: var(--spacing-xl) var(--spacing-xxl);
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
        margin: 0;

        span {
            display: flex;
            align-items: center;

            &:not(:last-of-type)::after {
                content: '•';
                display: block;
                margin: 0 var(--spacing-xs);
                color: var(--light-grey);
                font-size: 8px;
            }
        }
    }
`;

export default StyledHeader;