import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { AudioFeatures } from "../components/audio-features";
import { DRCurve } from "../components/dr-curve";
import { deleteTrack } from "../utilities/store";

const GetStarted = dynamic(async () => {
  const module = await import("../components/get-started");
  return module.GetStarted;
});

const QueryField = dynamic(async () => {
  const module = await import("../components/query-field");
  return module.QueryField;
});

const SelectTrack = dynamic(async () => {
  const module = await import("../components/select-track");
  return module.SelectTrack;
});

const TrackSelected = dynamic(async () => {
  const module = await import("../components/track-selected");
  return module.TrackSelected;
});

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
