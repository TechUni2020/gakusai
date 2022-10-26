import { Tabs } from "@mantine/core";
import { FC } from "react";
import { useFetchMenuList } from "@/hooks/useFetchMenuList";
import { BaseMenuList } from "@/components/Element/BaseMenuList";

export const MenuLists: FC = () => {
  const { menuList } = useFetchMenuList();
  // 売り切れをfilterして表示しない
  const filteredAllMenuList = menuList.filter((menu) => !menu.isSoldOut);
  const filteredFoodMenuList = filteredAllMenuList.filter((menu) => menu.categoryId === "food");
  const filteredDrinkMenuList = filteredAllMenuList.filter((menu) => menu.categoryId === "drink");

  return (
    <Tabs color="orange" defaultValue="all">
      <Tabs.List>
        <Tabs.Tab value="all">All</Tabs.Tab>
        <Tabs.Tab value="food">Food</Tabs.Tab>
        <Tabs.Tab value="drink">Drink</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="all" mt={4}>
        <BaseMenuList title="Menu" menuList={filteredAllMenuList} />
      </Tabs.Panel>

      <Tabs.Panel value="food" mt={4}>
        <BaseMenuList title="Food" menuList={filteredFoodMenuList} />
      </Tabs.Panel>

      <Tabs.Panel value="drink" mt={4}>
        <BaseMenuList title="Drink" menuList={filteredDrinkMenuList} />
      </Tabs.Panel>
    </Tabs>
  );
};
