import {
  Stack,
  NumberInput,
  NumberInputField,
  Text,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type HandleChange = (
  valueAsString: string,
  valueAsNumber: number
) => void;

export interface DrinkCountProps {
  drinkCount: number;
  setDrinkCount: (newDrinkCount: number) => void;
}

export const DrinkCount: FunctionComponent<DrinkCountProps> = ({
  drinkCount,
  setDrinkCount,
}) => {
  const handleChange: HandleChange = (_, drinkCount) => {
    setDrinkCount(drinkCount);
  };

  return (
    <Stack isInline alignItems="center">
      <NumberInput
        onChange={handleChange}
        value={isNaN(drinkCount) ? 0 : drinkCount}
        size="lg"
        min={0}
        max={10}
      >
        <NumberInputField width="4em" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width="4.3em" as="b" fontSize="sm" color="blackAlpha.700">
        {drinkCount == 1 ? "Drink In" : "Drinks In"}
      </Text>
    </Stack>
  );
};
