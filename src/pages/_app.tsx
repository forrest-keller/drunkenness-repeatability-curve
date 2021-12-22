import { ChakraProvider } from "@chakra-ui/react";
import { StateMachineProvider } from "little-state-machine";
import type { AppProps } from "next/app";
import Head from "next/head";
import { initializeStore } from "../utilities/store";

initializeStore();

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StateMachineProvider>
      <ChakraProvider>
        <Head>
          <title>D-R Curve</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateMachineProvider>
  );
};

export default CustomApp;
