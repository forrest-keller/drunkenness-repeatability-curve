import { Center, Fade } from "@chakra-ui/react";
import { LineSvgProps, ResponsiveLine, Serie } from "@nivo/line";
import { ScaleSpec } from "@nivo/scales";
import { AxisProps } from "@nivo/axes";
import { FunctionComponent } from "react";
import { Cordinate } from "../pages/tracks/[id]";
import { Box, CartesianMarkerProps, DatumValue } from "@nivo/core";

export interface DRCurveProps {
  cordinates: Cordinate[];
  drinkCount: number;
}

export const DRCurve: FunctionComponent<DRCurveProps> = ({
  cordinates,
  drinkCount,
}) => {
  const scale: ScaleSpec = {
    type: "linear",
    min: 0,
    max: 10,
  };
  const data: Serie[] = [
    {
      id: "main",
      data: cordinates,
    },
  ];
  const margin: Box = {
    top: 10,
    right: 10,
    bottom: 50,
    left: 50,
  };
  const axisBottom: AxisProps = {
    legend: "Drink Count",
    legendPosition: "middle",
    legendOffset: 36,
  };
  const axisLeft: AxisProps = {
    legend: "Times Repeatable",
    legendPosition: "middle",
    legendOffset: -36,
  };
  const markers: CartesianMarkerProps<DatumValue>[] = [
    {
      axis: "x",
      value: drinkCount,
    },
  ];
  const lineProps: LineSvgProps = {
    curve: "cardinal",
    pointLabelYOffset: 0,
    yScale: scale,
    xScale: scale,
    margin,
    data,
    axisBottom,
    axisLeft,
    markers,
  };

  return (
    <Fade in>
      <Center height={500}>
        <ResponsiveLine {...lineProps} />
      </Center>
    </Fade>
  );
};
