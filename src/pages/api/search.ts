import type { NextApiRequest, NextApiResponse } from "next";
import { spotifyApi } from "../../utilities/spotify-api";

export interface Track {
  id: string;
  name: string;
  artists: string[];
  imageUrl: string;
}

const route = async (req: NextApiRequest, res: NextApiResponse<Track[]>) => {
  // Parse Request
  const query = req.query.query as string;

  // Authenticate Spotify API
  const {
    body: { access_token },
  } = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(access_token);

  // Make Spotify API Request
  const {
    body: { tracks: tracksPagingObject },
  } = await spotifyApi.searchTracks(query, { limit: 5 });

  // Parse Request to Tracks
  const trackObjects = tracksPagingObject?.items || [];
  const tracks: Track[] = trackObjects.map((trackObject) => ({
    id: trackObject.id,
    name: trackObject.name,
    artists: trackObject.artists.map((artist) => artist.name),
    imageUrl: trackObject.album.images[0].url,
  }));

  res.status(200).json(tracks);
};

export default route;
