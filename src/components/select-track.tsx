import { Alert, Skeleton, SlideFade, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { useTracks } from "../hooks/use-tracks";
import { Track } from "../pages/api/search";
import { TrackPreview } from "./track-preview";

export interface SelectTrackProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SelectTrack: FunctionComponent<SelectTrackProps> = ({
  query,
  setQuery,
}) => {
  const { isLoading, error, tracks } = useTracks(query);
  const router = useRouter();

  const handleTrackSelect = (track: Track) => {
    router.push(`/tracks/${track.id}`);
    setQuery("");
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
        <SlideFade offsetY={-8} delay={index / 30} key={track.id} in>
          <TrackPreview onSelect={() => handleTrackSelect(track)} {...track} />
        </SlideFade>
      ))}
    </Stack>
  );
};
