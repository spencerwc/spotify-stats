import { NavLink } from 'react-router-dom';
import { logout } from '../utils/spotify';
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
        gap: var(--spacing-xxl);
        margin: 0;
        padding: 0;
        margin-right: auto;
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
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="artists">
                        Artists
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tracks">
                        Tracks
                    </NavLink>
                </li>
            </ul>
            <button className="log-out" onClick={logout}>Log Out</button>
        </StyledNav>
    );
}

export default Navbar;