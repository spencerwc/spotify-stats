import styled from 'styled-components/macro';

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    .item {
        background-color: var(--lightgrey);
        transition: background-color 0.3s ease;
        border-bottom: 1px solid var(--dark-grey);
        padding: var(--spacing-md) 0;

        &:last-child {
            border-bottom: none;
        }

        &:hover, &:focus {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    .item-inner {
        display: flex;
        align-items: center;
    }

    .item-image {
        position: relative;
        margin-right: var(--spacing-md);

        img {
            width: 70px;
            max-width: 80px;
            background-color: var(--dark-grey);
            border-radius: ${props => props.type === 'artist' ? '50%' : '2px'};
        }
    }

    .item-name {
        margin: 0;
        font-size: var(--font-size-md);
    }
`;

export default StyledList;