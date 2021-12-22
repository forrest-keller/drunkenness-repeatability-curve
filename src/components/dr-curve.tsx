import { Alert, Box, Center, Spinner } from "@chakra-ui/react";
import { Line, ResponsiveLine } from "@nivo/line";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent } from "react";
import { useAudioFeatures } from "../hooks/use-audio-features";

export const DRCurve: FunctionComponent = () => {
  const { state } = useStateMachine({});
  const { audioFeatures, error, isLoading } = useAudioFeatures();
  const data =
    audioFeatures !== undefined
      ? [
          {
            id: "main",
            data: [
              {
                x: 0,
                y: 10 + 10 * (-0.5 + audioFeatures.acousticness),
              },
              {
                x: 2,
                y: 20 + 20 * (-0.5 + audioFeatures.danceability),
              },
              {
                x: 3,
                y: 25 + 25 * (-0.5 + audioFeatures.energy),
              },
              {
                x: 6,
                y: 40 + 20 * (-0.5 + audioFeatures.instrumentalness),
              },
              {
                x: 8,
                y: 70 + 20 * (-0.5 + audioFeatures.liveness),
              },
              {
                x: 10,
                y: 90 + 10 * (-0.5 + audioFeatures.speechiness),
              },
            ],
          },
        ]
      : [];

  if (isLoading) {
    return (
      <Center height={500}>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return <Alert status="error">{error.message}</Alert>;
  }

  return (
    <Center height={500}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        yScale={{
          type: "linear",
          min: 0,
          max: 100,
        }}
        xScale={{
          type: "linear",
          min: 0,
          max: 10,
        }}
        axisBottom={{
          legend: "Drink Count (#)",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          legend: "Song Repeatability (%)",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        curve="cardinal"
        markers={[
          {
            axis: "x",
            value: state.drinkCount,
          },
        ]}
      />
    </Center>
  );
};
