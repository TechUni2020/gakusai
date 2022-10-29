import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PageLayout } from "@/components/Layout/pageLayout";
import { ListPage } from "@/components/Page";
import { pagesPath } from "@/lib/$path";
import { authService } from "@/modules/auth/auth.service";
import { AppLoading } from "@/components/Element/AppLoading";
import store from "../store";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const isSignedIn = authService.isSignedIn();

  useEffect(() => {
    if (!isSignedIn) router.push(pagesPath.auth.$url());
  }, []);

  if (!isSignedIn) return <AppLoading />;

  return (
    <Provider store={store}>
      <PageLayout>
        <ListPage />
      </PageLayout>
    </Provider>
  );
};

export default Home;
