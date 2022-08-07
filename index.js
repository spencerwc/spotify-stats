require('dotenv').config()
const axios = require('axios');
const express = require('express');
const app = express();
const path = require('path');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const FRONTEND_URI = process.env.FRONTEND_URI;
const PORT = process.env.PORT || 8888;

app.use(express.static(path.resolve(__dirname, './client/build')));

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
// Used to set the state at login
 const generateRandomString = length => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

// Used to store the state as a cookie
const stateKey = 'spotify_auth_state';

app.get('/', (req, res) => {
    res.json({
        temp: 'Hello World'
    });
});

app.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email user-top-read user-follow-read';
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state
    });
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
    const code = req.query.code || null;
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
    }).toString();

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        }
      }).then(response => {
        if (response.status === 200) {
            // Get the Spotify profile for the logged in user
            const { access_token, refresh_token, expires_in } = response.data;
            const queryParams = new URLSearchParams({
                access_token,
                refresh_token,
                expires_in
            });

            // Redirect to app
            res.redirect(`${FRONTEND_URI}?${queryParams}`)
        }
        else {
            const errorParam = new URLSearchParams({
                error: 'invalid_token'
            });

            res.redirect(`/?${error}`);
        }
      }).catch(error => {
            res.send(error);
      });
});

app.get('/refresh_token', (req, res) => {
    const { refresh_token } = req.query;
    const data = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
    });

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        }
    }).then(response => {
        res.send(response.data);
    }).catch(error => {
        res.send(error);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});