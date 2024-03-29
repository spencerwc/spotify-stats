<p align="center">
  <a href="https://spotify-stats-v1.herokuapp.com/">
    <h1 align="center">Spotify Profile Stats</h1>
  </a>
</p> 
<p align="center">
  View your top artists and tracks, and discover track-specific audio features with your Spotify account.
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84942739/183583166-67638a33-90bf-443b-bfc3-ba9bc18e3c2e.png" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84942739/183583263-063c8661-13f4-4cc7-8415-2d54dc66129e.png" />
</p>


## Set up Spotify integration

1. Register a Spotify app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/). 
2. Edit the app settings and add `http://localhost:8888/callback` as a Redirect URI.
3. Save the `CLIENT_ID` and `CLIENT_SECRET` from the app dashboard.

## Set up and run the app
1. Create a `.env` file at the root of the project.
```shell
touch .env
```

2. Add the saved `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard.
```env
CLIENT_ID=
CLIENT_SECRET=
```

3. Install dependencies
```shell
npm install
```

4. Run the Node server on <http://localhost:8888>
```shell
npm run server

```
5. Run the client on <http://localhost:3000>
```shell
npm run client
```

## Made With
- [Dotenv](https://github.com/motdotla/dotenv#readme)
- [Express](https://expressjs.com/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
