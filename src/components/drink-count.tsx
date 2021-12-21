import { Stack, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
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
    actions.updateDrinkCount({ drinkCount: drinkCount || 0 });
  };

  return (
    <Stack alignItems="center" spacing={0}>
      <NumberInput
        onChange={handleChange}
        value={state.drinkCount}
        variant="unstyled"
        size="lg"
      >
        <NumberInputField
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          padding={0}
          width="3em"
        />
      </NumberInput>
      <Text as="b" fontSize="sm" color="blackAlpha.700">
        Drinks In
      </Text>
    </Stack>
  );
};
