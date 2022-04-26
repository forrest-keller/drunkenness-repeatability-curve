import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { Search } from "../components/search";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Search />
    </Layout>
  );
};

export default SearchPage;
