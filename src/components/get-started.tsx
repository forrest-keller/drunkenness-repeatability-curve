import { Button, Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export const GET_STARTED_TEXT =
  "Dark times are upon us. As people return to being on AUX, some have forgotten that there is a correlation between the drunkenness of the members of the party and the repeatability of a given song. The horrors that unfold when this correlation is not taken seriously are too grave to muster. Thus, the Drunkenness-Repeatability Curve (henceforth shortened to D-R Curve) project was born with the goal to reduce the amount of suffering caused in these situations.";

export const GetStarted: FunctionComponent = () => {
  const router = useRouter();

  return (
    <Stack>
      <Text>{GET_STARTED_TEXT}</Text>
      <Center padding="2em">
        <Link href="/search" passHref>
          <Button colorScheme="blue">Search for a Song</Button>
        </Link>
      </Center>
    </Stack>
  );
};
