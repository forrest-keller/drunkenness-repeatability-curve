import { Alert, Center, Stack, Wrap } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useAudioFeatures } from "../hooks/use-audio-features";
import { AudioFeature } from "./audio-feature";

export const AudioFeatures: FunctionComponent = () => {
  const { error, audioFeatures, isLoading } = useAudioFeatures();

  if (isLoading) {
    return (
      <Center>
        <Wrap justify="center">
          <AudioFeature label="Acousticness" />
          <AudioFeature label="Danceability" />
          <AudioFeature label="Energy" />
          <AudioFeature label="Instrumentalness" />
          <AudioFeature label="Liveness" />
          <AudioFeature label="Speechiness" />
        </Wrap>
      </Center>
    );
  }

  if (error) {
    return <Alert status="error">{error.message}</Alert>;
  }

  if (audioFeatures == undefined) {
    return <Alert>No audio features found.</Alert>;
  }

  return (
    <Center>
      <Wrap justify="center">
        <AudioFeature value={audioFeatures.acousticness} label="Acousticness" />
        <AudioFeature value={audioFeatures.danceability} label="Danceability" />
        <AudioFeature value={audioFeatures.energy} label="Energy" />
        <AudioFeature
          value={audioFeatures.instrumentalness}
          label="Instrumentalness"
        />
        <AudioFeature value={audioFeatures.liveness} label="Liveness" />
        <AudioFeature value={audioFeatures.speechiness} label="Speechiness" />
      </Wrap>
    </Center>
  );
};
