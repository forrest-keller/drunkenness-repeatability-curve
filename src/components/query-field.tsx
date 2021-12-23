import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
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
  useEffect,
  useRef,
} from "react";
import { updateQuery, deleteQuery } from "../utilities/store";

export const QueryField: FunctionComponent = () => {
  const queryInputRef = useRef<HTMLInputElement>(null);
  const { state, actions } = useStateMachine({
    updateQuery,
    deleteQuery,
  });

  useEffect(() => {
    if (queryInputRef.current !== null) {
      queryInputRef.current.focus();
    }
  }, []);

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
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          id="search"
          ref={queryInputRef}
          placeholder="Track Name"
          value={state.query}
          onChange={handleSearchFieldChange}
        />
        <InputRightElement width="4rem">
          <Button
            variant="ghost"
            size="sm"
            height="2rem"
            onClick={handleSearchFieldClearClick}
          >
            Clear
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
