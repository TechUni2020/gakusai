import { SimpleGrid, Tabs } from "@mantine/core";
import { FC } from "react";
import { Menu } from "@/type/Menu";
import { MenuCard } from "@/components/Element/MenuCard";
import { useFetchMenuList } from "@/hooks/useFetchMenuList";

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
        <SimpleGrid
          cols={4}
          mx={24}
          breakpoints={[
            { maxWidth: "md", cols: 4, spacing: "md" },
            { maxWidth: "sm", cols: 3, spacing: "sm" },
            { maxWidth: "xs", cols: 2, spacing: "sm" },
          ]}
        >
          {filteredAllMenuList.map((menu: Menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="food" mt={4}>
        <SimpleGrid
          cols={4}
          mx={24}
          breakpoints={[
            { maxWidth: "md", cols: 4, spacing: "md" },
            { maxWidth: "sm", cols: 3, spacing: "sm" },
            { maxWidth: "xs", cols: 2, spacing: "sm" },
          ]}
        >
          {filteredFoodMenuList.map((menu: Menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="drink" mt={4}>
        <SimpleGrid
          cols={4}
          mx={24}
          breakpoints={[
            { maxWidth: "md", cols: 4, spacing: "md" },
            { maxWidth: "sm", cols: 3, spacing: "sm" },
            { maxWidth: "xs", cols: 2, spacing: "sm" },
          ]}
        >
          {filteredDrinkMenuList.map((menu: Menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>
  );
};
