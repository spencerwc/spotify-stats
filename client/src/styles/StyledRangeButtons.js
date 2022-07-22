import styled from 'styled-components/macro';

const StyledRangeButtons = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 0 var(--spacing-sm) 0;
    padding: 0;

    @media (min-width: 768px) {
        right: var(--spacing-xxl);
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