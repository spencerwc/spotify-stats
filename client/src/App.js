import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { accessToken } from './utils/spotify';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import TopArtists from './pages/TopArtists';
import TopTracks from './pages/TopTracks';
import Track from './pages/Track';

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
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="artists" element={<TopArtists />} />
              <Route path="tracks" element={<TopTracks />} />
              <Route path="tracks/:id" element={<Track />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
