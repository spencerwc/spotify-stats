import { useState, useEffect } from 'react';
import { accessToken, logout } from './utils/spotify';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Profile from './pages/Profile';
import styled from 'styled-components/macro';

const StyledLogoutButton = styled.button`
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-md);
    z-index: 10;
    
    @media (min-width: 768px) {
      right: var(--spacing-lg);
    }
`;

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div>
      <GlobalStyle />

      {!token ? (
        <Login />
        ) : (
          <>
            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
            <Profile/>
          </>
      )}
    </div>
  );
}

export default App;
