import { useState, useEffect } from 'react';
import { accessToken, logout } from './utils/spotify';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Profile from './pages/Profile';

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
          <div>
            <Profile/>
            {/* TODO: Move this button */}
            <button onClick={logout}>Log out</button>
          </div>
      )}
    </div>
  );
}

export default App;
