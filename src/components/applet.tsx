import { Center, Fade, SlideFade, Stack, Text } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent } from "react";
import { deleteTrack } from "../utilities/store";
import { AudioFeatures } from "./audio-features";
import { DRCurve } from "./dr-curve";
import { GetStarted } from "./get-started";
import { QueryField } from "./query-field";
import { SelectTrack } from "./select-track";
import { TrackSelected } from "./track-selected";

export const Applet: FunctionComponent = () => {
  const { state, actions } = useStateMachine({ deleteTrack });

  const handleTrackClose = () => {
    actions.deleteTrack({});
  };

  return state.query == undefined ? (
    <Fade in>
      <GetStarted />
    </Fade>
  ) : state.track == undefined ? (
    <Stack>
      <Fade in>
        <QueryField />
      </Fade>
      {state.query.trim().length ? (
        <SelectTrack />
      ) : (
        <Fade in>
          <Center paddingY="2em">
            <Text color="blackAlpha.400" fontSize="sm">
              Start Searching...
            </Text>
          </Center>
        </Fade>
      )}
    </Stack>
  ) : (
    <Stack gap="3em" hidden={state.query == undefined}>
      <Fade in>
        <TrackSelected onClose={handleTrackClose} {...state.track} />
      </Fade>
      <AudioFeatures />
      <DRCurve />
    </Stack>
  );
};
