import { Box, Center, Group, Title } from "@mantine/core";
import {FC, useEffect} from "react";
import { FoodCard } from "../Element/foodCard";
import {Menu, useFetchMenuList} from "@/hooks/useFetchMenuList";


export const ListPage: FC = (): JSX.Element => {
  const {menuList} = useFetchMenuList()
    console.log(menuList)

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
        {menuList.map((menu: Menu) => (
          <FoodCard key={menu.id} food={menu} />
        ))}
      </Group>
      <br />
    </>
  );
};
