import { Button, Center } from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import { FunctionComponent, MouseEventHandler } from "react";
import { updateQuery } from "../utilities/store";

export const GetStarted: FunctionComponent = () => {
  const { state, actions } = useStateMachine({
    updateQuery,
  });

  const handleGetStartedClick: MouseEventHandler<HTMLButtonElement> = () => {
    actions.updateQuery({ query: "" });
  };

  return (
    <Center>
      <Button colorScheme="blue" onClick={handleGetStartedClick}>
        Get Started
      </Button>
    </Center>
  );
};
