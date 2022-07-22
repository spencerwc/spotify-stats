import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { accessToken, logout } from './utils/spotify';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Profile from './pages/Profile';
import TopArtists from './pages/TopArtists';
import TopTracks from './pages/TopTracks';
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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="artists" element={<TopArtists />} />
                    <Route path="tracks" element={<TopTracks />} />
                </Routes>
            </BrowserRouter>
          </>
      )}
    </div>
  );
}

export default App;
