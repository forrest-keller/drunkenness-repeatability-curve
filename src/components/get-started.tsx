import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent, MouseEventHandler } from "react";
import { updateQuery } from "../utilities/store";

export const GET_STARTED_TEXT =
  "Dark times are upon us. As people return to being on AUX, some have forgotten that there is a correlation between the drunkenness of the members of the party and the repeatability of a given song. The horrors that unfold when this correlation is not taken seriously are too grave to muster. Thus, the Drunkenness-Repeatability Curve (henceforth shortened to D-R Curve) project was born with the goal to reduce the amount of suffering caused in these situations.";

export const GetStarted: FunctionComponent = () => {
  const { actions } = useStateMachine({
    updateQuery,
  });

  const handleGetStartedClick: MouseEventHandler<HTMLButtonElement> = () => {
    actions.updateQuery({ query: "" });
  };

  return (
    <Stack>
      <Text>{GET_STARTED_TEXT}</Text>
      <Center padding="2em">
        <Button colorScheme="blue" onClick={handleGetStartedClick}>
          Search for a Song
        </Button>
      </Center>
    </Stack>
  );
};
