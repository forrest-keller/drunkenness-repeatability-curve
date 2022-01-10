import type { NextPage } from "next";
import { GetStarted } from "../components/get-started";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
};

export default Home;
