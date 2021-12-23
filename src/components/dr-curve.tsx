import { Alert, Center, Fade, Spinner } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
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
                y:
                  1 +
                  2 * audioFeatures.danceability +
                  2 * audioFeatures.energy +
                  2 * audioFeatures.liveness,
              },
              {
                x: 2,
                y:
                  2 +
                  2 * (-0.5 + (1 - audioFeatures.acousticness)) +
                  1 * audioFeatures.danceability,
              },
              {
                x: 3 + Math.round(audioFeatures.energy),
                y:
                  2 +
                  2 * (-0.5 + audioFeatures.energy) +
                  1 * audioFeatures.danceability,
              },
              {
                x: 6 - Math.round(audioFeatures.danceability),
                y:
                  4 +
                  2 * (-0.5 + audioFeatures.danceability) +
                  1 * audioFeatures.danceability,
              },
              {
                x: 8,
                y: 7 + 2 * (-0.5 + audioFeatures.liveness),
              },
              {
                x: 10,
                y: 9 + 1 * (-0.5 + (1 - audioFeatures.speechiness)),
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
    <Fade in>
      <Center height={500}>
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
          pointLabelYOffset={0}
          yScale={{
            type: "linear",
            min: 0,
            max: 10,
          }}
          xScale={{
            type: "linear",
            min: 0,
            max: 10,
          }}
          axisBottom={{
            legend: "Drink Count",
            legendPosition: "middle",
            legendOffset: 36,
          }}
          axisLeft={{
            legend: "Times Repeatable",
            legendPosition: "middle",
            legendOffset: -36,
          }}
          curve="cardinal"
          markers={
            state.drinkCount !== undefined
              ? [
                  {
                    axis: "x",
                    value: state.drinkCount,
                  },
                ]
              : []
          }
        />
      </Center>
    </Fade>
  );
};
