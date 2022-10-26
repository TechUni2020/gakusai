import { Box, Center, SimpleGrid, Title } from "@mantine/core";
import { FC } from "react";
import { MenuCard } from "@/components/Element/MenuCard";
import { useFetchMenuList } from "@/hooks/useFetchMenuList";
import { Menu } from "@/type/Menu";
import { Congestion } from "../Congestion";

export const Page: FC = () => {
  const { menuList } = useFetchMenuList();
  // 売り切れをfilterして表示しない
  const filteredMenuList = menuList.filter((menu) => !menu.isSoldOut);

  return (
    <>
      <Congestion />
      <Box mt={24} mx={24}>
        <Center>以下から商品を注文できます。</Center>
        <Center>※お支払いは、、、。</Center>
      </Box>
      <Title order={3} mx={24}>
        Menu
      </Title>
      <SimpleGrid
        cols={4}
        mx={24}
        breakpoints={[
          { maxWidth: "md", cols: 4, spacing: "md" },
          { maxWidth: "sm", cols: 3, spacing: "sm" },
          { maxWidth: "xs", cols: 2, spacing: "sm" },
        ]}
      >
        {filteredMenuList.map((menu: Menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </SimpleGrid>
      <br />
    </>
  );
};
