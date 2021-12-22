import { Center, Container, Heading } from "@chakra-ui/react";
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
        <Heading>🍻 D-R Curve</Heading>
      </Center>
      <CSRApplet />
    </Container>
  );
};

export default Home;
