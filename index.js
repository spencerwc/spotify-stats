require('dotenv').config()
const axios = require('axios');
const express = require('express');
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

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
    const scope = 'user-read-private user-read-email';
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state
    }).toString();
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
    const code = req.query.code || null;
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
    });

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: data.toString(),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        }
      }).then(response => {
        if (response.status === 200) {
            // Get the Spotify profile for the logged in user
            const { access_token, token_type } = response.data;

            axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `${token_type} ${access_token}`
                }
            }).then(response => {
                res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
            }).catch(error => {
                res.send(error);
            });
        }
        else {
            res.send(response);
        }
      }).catch(error => {
            res.send(error);
      });
});

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});