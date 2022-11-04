import { MenuLists } from "@/components/Element/MenuLists";
import { Box, Center, Stack, Text } from "@mantine/core";
import { FC } from "react";
import { Congestion } from "../Congestion";

export const ListPage: FC = () => {
  return (
    <>
      <Congestion />
      <Box mt={24} mx={24}>
        <Text align="center">以下から商品を注文できます。</Text>
        <Center>
          <Stack spacing={0} align="start">
            <Text size="xs">※お支払いは、このアプリではできません。</Text>
            <Text size="xs">商品受け取り時にスタッフにお渡しください。</Text>
          </Stack>
        </Center>
      </Box>
      <MenuLists />
      <br />
    </>
  );
};
