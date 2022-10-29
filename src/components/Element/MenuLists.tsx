import { Tabs } from "@mantine/core";
import { FC } from "react";
import { useFetchMenuList } from "@/hooks/useFetchMenuList";
import { BaseMenuList } from "@/components/Element/BaseMenuList";

/*
 * Info　他で仕様することになりそうなタイミングで定数を切り出す
 */
const ALL = "all";
const FOOD = "food";
const DRINK = "drink";

export const MenuLists: FC = () => {
  const { menuList } = useFetchMenuList();

  // 売り切れをfilterして表示しない
  const filteredAllMenuList = menuList.filter((menu) => !menu.isSoldOut);
  const filteredFoodMenuList = filteredAllMenuList.filter((menu) => menu.categoryName === FOOD);
  const filteredDrinkMenuList = filteredAllMenuList.filter((menu) => menu.categoryName === DRINK);

  return (
    <Tabs color="orange" defaultValue="all">
      <Tabs.List>
        <Tabs.Tab value={ALL}>All</Tabs.Tab>
        <Tabs.Tab value={FOOD}>Food</Tabs.Tab>
        <Tabs.Tab value={DRINK}>Drink</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value={ALL} mt={4}>
        <BaseMenuList title="Menu" menuList={filteredAllMenuList} />
      </Tabs.Panel>

      <Tabs.Panel value={FOOD} mt={4}>
        <BaseMenuList title="Food" menuList={filteredFoodMenuList} />
      </Tabs.Panel>

      <Tabs.Panel value={DRINK} mt={4}>
        <BaseMenuList title="Drink" menuList={filteredDrinkMenuList} />
      </Tabs.Panel>
    </Tabs>
  );
};
