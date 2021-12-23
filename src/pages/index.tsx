import {
  Center,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const CSRApplet = dynamic(
  async () => {
    const module = await import("../components/applet");
    return module.Applet;
  },
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <Container maxWidth="2xl">
      <Center margin="2em">
        <Stack align="center">
          <Heading>🍻 D-R Curve</Heading>
          <Text fontSize="sm" color="blackAlpha.700">
            Scientifically engineered by&nbsp;
            <Link href="https://forrestkeller.com">Forrest Keller</Link>
          </Text>
        </Stack>
      </Center>
      <CSRApplet />
    </Container>
  );
};

export default Home;
