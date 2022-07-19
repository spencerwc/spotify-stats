import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    console.log(accessToken);
    console.log(refreshToken);
  });
  return (
    <div>
      <header>
        <a href="http://localhost:8888/login">Log in to Spotify</a>
      </header>
    </div>
  );
}

export default App;
