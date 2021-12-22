import {
  Stack,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

export interface AudioFeatureProps {
  value?: number;
  label: string;
}

export const AudioFeature: FunctionComponent<AudioFeatureProps> = ({
  value,
  label,
}) => {
  const forcedValue = value == undefined ? 0 : value;
  const percentageValue = Math.round(forcedValue * 100);
  const valueLabel = percentageValue.toString() + "%";

  return (
    <Stack as={Center} width="6em">
      {value == undefined ? (
        <CircularProgress />
      ) : (
        <CircularProgress value={percentageValue}>
          <CircularProgressLabel>{valueLabel}</CircularProgressLabel>
        </CircularProgress>
      )}
      <Text fontSize="xs" color="blackAlpha.700">
        {label}
      </Text>
    </Stack>
  );
};
