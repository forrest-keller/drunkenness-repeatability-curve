import type { NextApiRequest, NextApiResponse } from "next";
import { authenticate, spotifyApi } from "../../utilities/spotify-api";

export interface Track {
  id: string;
  name: string;
  artists: string[];
  imageUrl: string;
}

const route = async (req: NextApiRequest, res: NextApiResponse<Track[]>) => {
  await authenticate();

  const query = req.query.query as string;

  const {
    body: { tracks: tracksPagingObject },
  } = await spotifyApi.searchTracks(query, { limit: 10 });

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
