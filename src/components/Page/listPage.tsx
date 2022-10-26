import { Box, Center, Title } from "@mantine/core";
import { FC } from "react";
import { MenuLists } from "@/components/Element/MenuLists";

export const ListPage: FC = () => {
  return (
    <>
      <Box mt={24} mx={24}>
        <Center>以下から商品を注文できます。</Center>
        <Center>※お支払いは、、、。</Center>
      </Box>
      <Title order={3} mx={24}>
        Menu
      </Title>
      <MenuLists />
      <br />
    </>
  );
};
