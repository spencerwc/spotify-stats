import { NavLink } from 'react-router-dom';
import { logout } from '../utils/spotify';
import { FiHome, FiMusic, FiHeadphones, FiLogOut } from 'react-icons/fi'; 
import styled from 'styled-components/macro';

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    background-color: var(--dark-grey);
    z-index: 10;
    display: flex;
    font-family: var(--font-acc);
    font-weight: 700;
    padding: var(--spacing-lg);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        max-width: var(--site-max-width);
        margin: 0 auto;

        @media (min-width: 768px) {
            width: 100%;
            justify-content: flex-start;
            gap: var(--spacing-xxl);
            margin-right: auto;
            padding: 0 var(--spacing-md);
        }
    }

    li:last-of-type {
        @media (min-width: 768px) {
            margin-left: auto;
        }
    }

    svg {
        font-size: 1.3rem;
        
        @media (min-width: 768px) {
            display: none;
        }
    }

    span {
        display: none;
        
        @media (min-width: 768px){
            display: inline;
        }
    }

    .active {
        color: var(--green);
    }

    .log-out {
        padding: 0;
        background: none;
        font-size: var(--font-size-base);
    }
`;

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/" aria-label="Home Link">
                        <FiHome name="Home"/> <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="artists" aria-label="Artists Link">
                        <FiHeadphones name="Artists" /> <span>Artists</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tracks" aria-label="Tracks Link">
                        <FiMusic name="Tracks" /> <span>Tracks</span>
                    </NavLink>
                </li>
                <li>
                    <button className="log-out" onClick={logout}>
                        <FiLogOut /> <span>Log Out</span>
                    </button>
                </li>
            </ul>
        </StyledNav>
    );
}

export default Navbar;