import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="artists" element={<h1>Top Artists</h1>} />
            <Route path="tracks" element={<h1>Top Tracks</h1>} />
            <Route path="playlists" element={<h1>Playlists</h1>} />
            <Route path="/playlists/:playlistId" element={<h1>Playlist</h1>} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();