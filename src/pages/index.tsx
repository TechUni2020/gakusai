import { useRouter } from "next/router";
import { useEffect } from "react";
import { PageLayout } from "@/components/Layout/pageLayout";
import { ListPage } from "@/components/Page";
import { pagesPath } from "@/lib/$path";
import { authService } from "@/modules/auth/auth.service";
import { orderService } from "@/modules/order/order.service";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const isSignedIn = authService.isSignedIn();

  useEffect(() => {
    if (!isSignedIn) router.push(pagesPath.auth.$url());
    if (orderService.getOrderNum() != null) router.push(pagesPath.completed.$url());
  }, []);

  return (
    <PageLayout>
      <ListPage />
    </PageLayout>
  );
};

export default Home;
