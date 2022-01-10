import {
  Container,
  Center,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FunctionComponent } from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Container maxWidth="2xl">
      <Center margin="2em">
        <Stack align="center">
          <NextLink href="/" passHref>
            <Link fontSize="4xl" fontWeight="bold">
              🍺 D-R Curve
            </Link>
          </NextLink>
          <Text fontSize="sm" color="blackAlpha.700">
            Scientifically Engineered by&nbsp;
            <Link href="https://forrestkeller.com">Forrest Keller</Link>
          </Text>
        </Stack>
      </Center>
      {children}
    </Container>
  );
};
