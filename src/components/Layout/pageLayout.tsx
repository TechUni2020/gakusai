import { Footer } from "@/components/Element/footer";
import { Header } from "@/components/Element/header";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
