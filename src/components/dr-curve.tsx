import { Center, Fade } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
import { FunctionComponent } from "react";
import { Cordinate } from "../pages/tracks/[id]";

export interface DRCurveProps {
  cordinates: Cordinate[];
  drinkCount: number;
}

export const DRCurve: FunctionComponent<DRCurveProps> = ({
  cordinates,
  drinkCount,
}) => {
  const data = [
    {
      id: "main",
      data: cordinates,
    },
  ];

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
            drinkCount !== undefined
              ? [
                  {
                    axis: "x",
                    value: drinkCount,
                  },
                ]
              : []
          }
        />
      </Center>
    </Fade>
  );
};
