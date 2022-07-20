import { useState, useEffect } from 'react';
import { accessToken, logout, getUserProfile } from './utils/spotify';

const App = () => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const response = await getUserProfile();
        setProfile(response.data);
      } 
      catch(err) {
        console.error(err);
      }
    }

    fetchData();
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
            {profile && (
                <h1>Hi {profile.display_name}</h1>
            )}
          </div>
        )}
    </div>
  );
}

export default App;
