import { PageLayout } from "@/components/Layout/pageLayout";
import { ListPage } from "@/components/Page";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <ListPage />
    </PageLayout>
  );
};

export default Home;
