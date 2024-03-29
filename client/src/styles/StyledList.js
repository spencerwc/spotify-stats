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
        padding: var(--spacing-md) var(--spacing-xs);

        &:hover, &:focus {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    .item-inner {
        display: flex;
        align-items: center;
        overflow: hidden;
        letter-spacing: 0.03rem;
    }

    .item-image {
        position: relative;
        margin-right: var(--spacing-md);
        flex-shrink: 0;

        img {
            width: 60px;
            height: 60px;
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

        &:hover {
            text-decoration: underline;
        }
    }

    .item-meta {
        font-size: var(--font-size-sm);
        color: var(--off-white);
    }
`;

export default StyledList;