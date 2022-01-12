import { Stack } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { AudioFeatures } from "../../components/audio-features";
import { DRCurve } from "../../components/dr-curve";
import { Layout } from "../../components/layout";
import { TrackSelected } from "../../components/track-selected";
import { authenticate, spotifyApi } from "../../utilities/spotify-api";
import { Track } from "../api/search";

export interface AudioFeatures {
  acousticness: number;
  danceability: number;
  energy: number;
  liveness: number;
  speechiness: number;
}

export interface Cordinate {
  x: number;
  y: number;
}

export interface TrackMetadata {
  track: Track;
  audioFeatures: AudioFeatures;
  DRCurveCordinates: Cordinate[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await authenticate();
  const trackId = context.params?.id as string;

  const {
    body: { acousticness, danceability, speechiness, liveness, energy },
  } = await spotifyApi.getAudioFeaturesForTrack(trackId);
  const { body: trackObject } = await spotifyApi.getTrack(trackId);

  const track: Track = {
    id: trackObject.id,
    artists: trackObject.artists.map((artist) => artist.name),
    imageUrl: trackObject.album.images[0].url,
    name: trackObject.name,
  };

  const audioFeatures: AudioFeatures = {
    acousticness,
    danceability,
    speechiness,
    liveness,
    energy,
  };

  const DRCurveCordinates: Cordinate[] = [
    {
      x: 0,
      y: 1 + 2 * danceability + 2 * energy + 2 * liveness,
    },
    {
      x: 2,
      y: 2 + 2 * (-0.5 + (1 - acousticness)) + 1 * danceability,
    },
    {
      x: 3 + Math.round(energy),
      y: 2 + 2 * (-0.5 + energy) + 1 * danceability,
    },
    {
      x: 6 - Math.round(danceability),
      y: 4 + 2 * (-0.5 + danceability) + 1 * danceability,
    },
    {
      x: 8,
      y: 7 + 2 * (-0.5 + liveness),
    },
    {
      x: 10,
      y: 9 + 1 * (-0.5 + (1 - speechiness)),
    },
  ];

  return {
    props: {
      track,
      audioFeatures,
      DRCurveCordinates,
    },
  };
};

const TrackPage: NextPage<TrackMetadata> = ({
  track,
  audioFeatures,
  DRCurveCordinates,
}: TrackMetadata) => {
  const [drinkCount, setDrinkCount] = useState(1);

  return (
    <Layout>
      <Stack gap="2em">
        <TrackSelected
          {...track}
          drinkCount={drinkCount}
          setDrinkCount={setDrinkCount}
        />
        <AudioFeatures {...audioFeatures} />
        <DRCurve drinkCount={drinkCount} cordinates={DRCurveCordinates} />
      </Stack>
    </Layout>
  );
};

export default TrackPage;
