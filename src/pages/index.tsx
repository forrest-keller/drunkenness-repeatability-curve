import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { GetStarted } from "../components/get-started";
import { Layout } from "../components/layout";
import { Search } from "../components/search";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
};

export default HomePage;
