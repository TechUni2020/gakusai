import { Footer } from "@/components/Element/Footer";
import { Header } from "@/components/Element/Header";
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
