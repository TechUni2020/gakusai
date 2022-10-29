import { PageLayout } from "@/components/Layout/pageLayout";
import { ListPage } from "@/components/Page";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import store from "../store";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <PageLayout>
        <ListPage />
      </PageLayout>
    </Provider>
  );
};

export default Home;
