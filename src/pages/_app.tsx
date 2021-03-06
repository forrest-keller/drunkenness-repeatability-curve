import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>D-R Curve</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default CustomApp;
