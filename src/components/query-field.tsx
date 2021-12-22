import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useStateMachine } from "little-state-machine";
import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
} from "react";
import { updateQuery, deleteQuery } from "../utilities/store";

export const QueryField: FunctionComponent = () => {
  const { state, actions } = useStateMachine({
    updateQuery,
    deleteQuery,
  });

  const handleSearchFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    actions.updateQuery({ query: e.target.value });
  };

  const handleSearchFieldClearClick: MouseEventHandler<HTMLButtonElement> =
    () => {
      actions.deleteQuery({});
    };

  if (state.query == undefined) {
    return null;
  }

  return (
    <FormControl>
      <FormLabel htmlFor="search">Search for a Track</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          id="search"
          placeholder="Mamma Mia"
          value={state.query}
          onChange={handleSearchFieldChange}
        />
        <InputRightElement width="4rem">
          <Button
            size="sm"
            height="1.75rem"
            onClick={handleSearchFieldClearClick}
          >
            Clear
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
