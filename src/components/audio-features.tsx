import { Center, Wrap } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { AudioFeatures as AudioFeaturesProps } from "../pages/tracks/[id]";
import { AudioFeature } from "./audio-feature";

export const AudioFeatures: FunctionComponent<AudioFeaturesProps> = ({
  acousticness,
  danceability,
  energy,
  liveness,
  speechiness,
}) => {
  return (
    <Center>
      <Wrap justify="center">
        <AudioFeature value={acousticness} label="Acousticness" />
        <AudioFeature value={danceability} label="Danceability" />
        <AudioFeature value={energy} label="Energy" />
        <AudioFeature value={liveness} label="Liveness" />
        <AudioFeature value={speechiness} label="Speechiness" />
      </Wrap>
    </Center>
  );
};
