import { SimpleGrid, Title } from "@mantine/core";
import { FC } from "react";
import { Menu } from "@/type/Menu";
import { MenuCard } from "@/components/Element/MenuCard";

interface Props {
  title: string;
  menuList: Array<Menu>;
}

export const BaseMenuList: FC<Props> = (props) => {
  const { title, menuList } = props;
  return (
    <>
      <Title order={3} mx={24}>
        {title}
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
        {menuList.map((menu: Menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </SimpleGrid>
    </>
  );
};
