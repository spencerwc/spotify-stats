import { useState, useEffect } from 'react';
import { accessToken, logout } from './utils/spotify';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div>
      {!token ? (
        <a href="http://localhost:8888/login">
          Log in to Spotify
        </a>
        ) : (
          <div>
            <h1>Logged in</h1>
            <button onClick={logout}>Log out</button>
          </div>
        )}
    </div>
  );
}

export default App;
