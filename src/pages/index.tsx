import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import type { NextPage } from "next";
import { AudioFeatures } from "../components/audio-features";
import { DRCurve } from "../components/dr-curve";
import { GetStarted } from "../components/get-started";
import { QueryField } from "../components/query-field";
import { SelectTrack } from "../components/select-track";
import { TrackSelected } from "../components/track-selected";
import { deleteTrack } from "../utilities/store";

const Home: NextPage = () => {
  const { state, actions } = useStateMachine({ deleteTrack });

  const handleTrackClose = () => {
    actions.deleteTrack({});
  };

  return (
    <Container maxWidth="2xl">
      <Center margin="2em">
        <Heading>🍻 D-R Curve</Heading>
      </Center>
      {state.query == undefined ? (
        <GetStarted />
      ) : state.track == undefined ? (
        <Stack>
          <QueryField />
          {state.query.trim().length ? <SelectTrack /> : null}
        </Stack>
      ) : (
        <Stack gap="3em">
          <TrackSelected onClose={handleTrackClose} {...state.track} />
          <AudioFeatures />
          <DRCurve />
        </Stack>
      )}
    </Container>
  );
};

export default Home;
