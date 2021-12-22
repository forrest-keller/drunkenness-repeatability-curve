import {
  Center,
  Container,
  Heading,
  Skeleton,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { AudioFeatures } from "../components/audio-features";
import { DRCurve } from "../components/dr-curve";
import { deleteTrack } from "../utilities/store";

const GetStarted = dynamic(
  async () => {
    const module = await import("../components/get-started");
    return module.GetStarted;
  },
  { loading: () => <Skeleton /> }
);

const QueryField = dynamic(
  async () => {
    const module = await import("../components/query-field");
    return module.QueryField;
  },
  { loading: () => <Skeleton /> }
);

const SelectTrack = dynamic(
  async () => {
    const module = await import("../components/select-track");
    return module.SelectTrack;
  },
  { loading: () => <Skeleton /> }
);

const TrackSelected = dynamic(
  async () => {
    const module = await import("../components/track-selected");
    return module.TrackSelected;
  },
  { loading: () => <Skeleton /> }
);

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
