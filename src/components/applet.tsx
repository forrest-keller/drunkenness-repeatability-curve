import { Fade, SlideFade, Stack } from "@chakra-ui/react";
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
    <GetStarted />
  ) : state.track == undefined ? (
    <Stack>
      <QueryField />
      {state.query.trim().length ? <SelectTrack /> : null}
    </Stack>
  ) : (
    <Stack gap="3em" hidden={state.query == undefined}>
      <SlideFade in>
        <TrackSelected onClose={handleTrackClose} {...state.track} />
      </SlideFade>
      <AudioFeatures />
      <DRCurve />
    </Stack>
  );
};
