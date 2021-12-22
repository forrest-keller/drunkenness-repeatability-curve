import type { NextApiRequest, NextApiResponse } from "next";
import { authenticate, spotifyApi } from "../../utilities/spotify-api";

export interface AudioFeatures {
  acousticness: number;
  danceability: number;
  energy: number;
  liveness: number;
  speechiness: number;
}

const route = async (
  req: NextApiRequest,
  res: NextApiResponse<AudioFeatures>
) => {
  await authenticate();
  const trackId = req.query.trackId as string;

  const {
    body: { acousticness, danceability, speechiness, liveness, energy },
  } = await spotifyApi.getAudioFeaturesForTrack(trackId);

  res.status(200).json({
    acousticness,
    danceability,
    speechiness,
    liveness,
    energy,
  });
};

export default route;
