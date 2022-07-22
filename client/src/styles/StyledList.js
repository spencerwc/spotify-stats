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
        padding: var(--spacing-md) var(--spacing-xs);

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
        overflow: hidden;
    }

    .item-image {
        position: relative;
        margin-right: var(--spacing-md);
        flex-shrink: 0;

        img {
            width: 64px;
            height: 64px;
            min-width: 60px;
            background-color: var(--dark-grey);
            border-radius: ${props => props.type === 'artist' ? '50%' : '2px'};
        }
    }

    .item-data {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
        flex-shrink: 0;
    }

    .item-name {
        margin: 0;
        font-size: var(--font-size-md);
    }

    .item-meta {
        font-size: var(--font-size-sm);
    }
`;

export default StyledList;