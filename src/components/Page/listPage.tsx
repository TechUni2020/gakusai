import { Box, Center, Group, Title } from "@mantine/core";
import {FC} from "react";
import { FoodCard } from "../Element/foodCard";
import {useFetchMenuList} from "@/hooks/useFetchMenuList";
import {Menu} from "@/type/Menu"

export const ListPage: FC = () => {
  const {menuList} = useFetchMenuList()
  // 売り切れをfilterして表示しない
  const filteredMenuList =  menuList.filter(menu => !menu.isSoldOut)
  return (
    <>
      <Box mt={24} mx={24}>
        <Center>以下から商品を注文できます。</Center>
        <Center>※お支払いは、、、。</Center>
      </Box>
      <Title order={3} mx={24}>
        Menu
      </Title>
      <Group m={24} my={12} spacing={12}>
        {filteredMenuList.map((menu: Menu) => (
          <FoodCard key={menu.id} menu={menu} />
        ))}
      </Group>
      <br />
    </>
  );
};
