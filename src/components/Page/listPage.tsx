import { Box, Center } from "@mantine/core";
import { FC } from "react";
import { MenuLists } from "@/components/Element/MenuLists";

export const ListPage: FC = () => {
  return (
    <>
      <Box mt={24} mx={24}>
        <Center>以下から商品を注文できます。</Center>
        <Center>※お支払いは、、、。</Center>
      </Box>
      <MenuLists />
      <br />
    </>
  );
};
