import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export const authenticate = async () => {
  const {
    body: { access_token },
  } = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(access_token);
};
