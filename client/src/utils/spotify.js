import axios from 'axios';

const LOCALSTORAGE_KEYS = {
    accessToken: 'spotify_access_token',
    refreshToken: 'spotify_refresh_token',
    expireTime: 'spotify_token_expire_time',
    timestamp: 'spotify_token_timestamp'
}

const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp)
}

export const logout = () => {
    // On logout, clear localStorage and navigate to home
    for (const property in LOCALSTORAGE_KEYS) {
        window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
    }
    window.location = window.location.origin;
}

const isExpiredToken = () => {
    const { accessToken, expireTime, timestamp } = LOCALSTORAGE_VALUES;
    const expireTimeValue = Number(expireTime);
    const timestampValue = Number(timestamp);
    
    if (!accessToken || !timestamp) {
        return false;
    }

    // Check elapsed time by comparing current time to timestamp
    const timeElapsedInMs = Date.now() - timestampValue;

    // Token is expired if elapsed time > 3600 (Expire time from Spotify)
    return timeElapsedInMs / 1000 > expireTimeValue; 
}

const refreshToken = async () => {
    try {
        // If refresh token is not stored or refresh request is looping, log out
        if (!LOCALSTORAGE_VALUES.refreshToken === 'undefined' || Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000 < 1000) {
            console.error('Refresh token not available');
            logout();
        }
        // Get refresh token from endpoint and update localStorage
        const { data } = await axios.get(`/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`);
        window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
        window.location.reload();
    } catch (err) {
        console.error(err);
    }
}

const getAccessToken = () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const queryParams = {
        [LOCALSTORAGE_KEYS.accessToken]: params.get('access_token'),
        [LOCALSTORAGE_KEYS.refreshToken]: params.get('refresh_token'),
        [LOCALSTORAGE_KEYS.expireTime]: params.get('expires_in'),
    }
    const error = params.get('error');

    // Refresh access token on error, expired token, or invalid localStorage value
    if (error || isExpiredToken()  || LOCALSTORAGE_VALUES.accessToken === 'undefined') {
        refreshToken();
    }

    // Use access key in localStorage if value is valid
    if (LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined') {
        return LOCALSTORAGE_VALUES.accessToken;
    }

    // Check for first-time log in with queryParams
    if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
        for (const property in queryParams) {
            window.localStorage.setItem(property, queryParams[property]);
        }
        // Store current timestamp to track expiration later
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
        return queryParams[LOCALSTORAGE_KEYS.accessToken];
    }
    return false;
}

export const accessToken = getAccessToken();

// Axios default headers
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getUserProfile = () => axios.get('https://api.spotify.com/v1/me');

export const getUserPlaylists = (limit = 10) => axios.get(`https://api.spotify.com/v1/me/playlists?limit=${limit}`);

export const getUserTopAritsts = (timeRange = 'long_term') => axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`);

export const getUserTopTracks = (timeRange = 'long_term') => axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`);