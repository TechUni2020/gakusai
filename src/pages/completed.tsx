import { NextPage } from "next";
import { useEffect } from "react";
import router from "next/router";
import { Completed } from "@/components/Page/completed";
import { authService } from "@/modules/auth/auth.service";
import { pagesPath } from "@/lib/$path";
import { orderService } from "@/modules/order/order.service";

const CompletedPage: NextPage = () => {
  const isSignedIn = authService.isSignedIn();

  useEffect(() => {
    if (!isSignedIn) router.push(pagesPath.auth.$url());
    if (orderService.getOrderNum() == null) router.push(pagesPath.$url());
  }, []);

  return <Completed />;
};

export default CompletedPage;
