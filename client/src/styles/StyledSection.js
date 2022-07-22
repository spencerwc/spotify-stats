import styled from 'styled-components/macro';

const StyledSection = styled.section`
    margin: 0 var(--spacing-md);
    .section-inner {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        padding: var(--spacing-lg);
        border-radius: var(--border-radius-subtle);
        background-color: var(--grey);
    }

    .section-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: var(--spacing-md);
    }

    .section-heading {
        margin: 0;
        font-size: var(--font-size-lg);
    }

    .section-see-all {
        display: flex;
        align-items: center;
        font-family: var(--font-acc);
        font-size: var(--font-size-md);
        font-weight: 700;
        padding: 0 var(--spacing-sm);
        border: 2px solid;
        border-radius: var(--border-radius-pill);
    }
`;

export default StyledSection;