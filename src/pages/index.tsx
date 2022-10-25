import { AuthModal } from "@/components/Element/authModal";
import { PageLayout } from "@/components/Layout/pageLayout";
import { ListPage } from "@/components/Page/listPage";
import { useGetUID } from "@/hooks/useGetUID";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const uid = useGetUID();

  return (
    <>
      {!uid && <AuthModal />}
      <PageLayout>
        <ListPage />
      </PageLayout>
    </>
  );
};

export default Home;
