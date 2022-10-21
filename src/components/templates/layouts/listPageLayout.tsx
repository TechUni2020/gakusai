import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { ListPage } from "@/components/pages/listPage";
import { FC } from "react";

export const ListPageLayout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ListPage />
      <Footer />
    </>
  );
};
