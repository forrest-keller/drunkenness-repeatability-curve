import {
  Stack,
  NumberInput,
  NumberInputField,
  Text,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent } from "react";
import { updateDrinkCount } from "../utilities/store";

export type HandleChange = (
  valueAsString: string,
  valueAsNumber: number
) => void;

export const DrinkCount: FunctionComponent = () => {
  const { state, actions } = useStateMachine({ updateDrinkCount });

  const handleChange: HandleChange = (_, drinkCount) => {
    actions.updateDrinkCount({ drinkCount: drinkCount });
  };

  return (
    <Stack isInline alignItems="center">
      <NumberInput
        onChange={handleChange}
        value={isNaN(state.drinkCount) ? 0 : state.drinkCount}
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
        {state.drinkCount == 1 ? "Drink In" : "Drinks In"}
      </Text>
    </Stack>
  );
};
