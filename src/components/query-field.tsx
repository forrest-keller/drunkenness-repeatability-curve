import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";

export interface QueryFieldPeops {
  query: string;
  setQuery: (newQuery: string) => void;
}

export const QueryField: FunctionComponent<QueryFieldPeops> = ({
  query,
  setQuery,
}) => {
  const queryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (queryInputRef.current !== null) {
      queryInputRef.current.focus();
    }
  }, []);

  const handleSearchFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchFieldClearClick: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setQuery("");
  };

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
          value={query}
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
