import { Center, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { QueryField } from "./query-field";
import { SelectTrack } from "./select-track";

export const Search: FunctionComponent = () => {
  const [query, setQuery] = useState("");

  return (
    <Stack>
      <QueryField query={query} setQuery={setQuery} />
      {query.trim().length && <SelectTrack query={query} setQuery={setQuery} />}
    </Stack>
  );
};
