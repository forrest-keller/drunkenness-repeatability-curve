import { Stack, Fade, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../components/layout";
import { QueryField } from "../components/query-field";
import { SelectTrack } from "../components/select-track";

const Search: NextPage = () => {
  const [query, setQuery] = useState("");

  return (
    <Layout>
      <Stack>
        <QueryField query={query} setQuery={setQuery} />
        {query.trim().length ? (
          <SelectTrack query={query} />
        ) : (
          <Center paddingY="2em">
            <Text color="blackAlpha.400" fontSize="sm">
              Start Searching...
            </Text>
          </Center>
        )}
      </Stack>
    </Layout>
  );
};

export default Search;
