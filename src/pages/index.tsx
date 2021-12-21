import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import type { NextPage } from "next";
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
    <Container>
      <Center margin="2em">
        <Heading>DR Curve</Heading>
      </Center>
      {state.query == null && <GetStarted />}
      {state.query != null && !state.track && (
        <Stack>
          <QueryField />
          {state.query.trim().length && <SelectTrack />}
        </Stack>
      )}
      {state.track && (
        <TrackSelected onClose={handleTrackClose} {...state.track} />
      )}
    </Container>
  );
};

export default Home;