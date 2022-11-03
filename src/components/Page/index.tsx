import { MenuLists } from "@/components/Element/MenuLists";
import { Box, Center } from "@mantine/core";
import { FC } from "react";
import { Congestion } from "../Congestion";

export const ListPage: FC = () => {
  return (
    <>
      <Congestion />
      <Box mt={24} mx={24}>
        <Center>以下から商品を注文できます。</Center>
        <Center>※お支払いは、このアプリではできません。商品受け取り時にスタッフにお渡しください。</Center>
      </Box>
      <MenuLists />
      <br />
    </>
  );
};
