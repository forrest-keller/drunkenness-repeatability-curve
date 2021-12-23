import {
  Alert,
  Center,
  Skeleton,
  SlideFade,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent } from "react";
import { useTracks } from "../hooks/use-tracks";
import { Track } from "../pages/api/search";
import { updateTrack } from "../utilities/store";
import { TrackPreview } from "./track-preview";

export const SelectTrack: FunctionComponent = () => {
  const { actions } = useStateMachine({ updateTrack });
  const { isLoading, error, tracks } = useTracks();

  const handleTrackSelect = (track: Track) => {
    actions.updateTrack({ track });
  };

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
      </Stack>
    );
  }

  if (error) {
    return <Alert status="error">{error.message}</Alert>;
  }

  if (tracks == undefined || tracks.length == 0) {
    return <Alert status="warning">No tracks found.</Alert>;
  }

  return (
    <Stack>
      {tracks.map((track, index) => (
        <SlideFade delay={index / 30} key={track.id} in>
          <TrackPreview onSelect={() => handleTrackSelect(track)} {...track} />
        </SlideFade>
      ))}
    </Stack>
  );
};
