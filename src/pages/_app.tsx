import { ChakraProvider } from "@chakra-ui/react";
import { StateMachineProvider } from "little-state-machine";
import type { AppProps } from "next/app";
import { initializeStore } from "../utilities/store";

initializeStore();

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StateMachineProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateMachineProvider>
  );
};

export default CustomApp;
