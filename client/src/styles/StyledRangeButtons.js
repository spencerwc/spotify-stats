import styled from 'styled-components/macro';

const StyledRangeButtons = styled.ul`
    display: flex;
    list-style: none;
    margin: var(--spacing-lg) 0 var(--spacing-sm) 0;
    padding: 0;

    @media (min-width: 768px) {
        position: absolute;
        right: var(--spacing-md);
        top: var(--spacing-lg);
        margin: 0;
    }

    li {
        margin-right: var(--spacing-xs);
    }

    button {
        &.active {
            background-color: var(--green);
            color: var(--black);
        }
    }
`;

export default StyledRangeButtons;