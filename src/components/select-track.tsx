import { Alert, Spinner, Stack } from "@chakra-ui/react";
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
    return <Spinner />;
  }

  if (error) {
    return <Alert status="error">{error.message}</Alert>;
  }

  if (tracks == undefined || tracks.length == 0) {
    return <Alert>No tracks found.</Alert>;
  }

  return (
    <Stack>
      {tracks.map((track) => (
        <TrackPreview
          onSelect={() => handleTrackSelect(track)}
          key={track.id}
          {...track}
        />
      ))}
    </Stack>
  );
};
