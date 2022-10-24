import { Box, Center, Group, Title } from "@mantine/core";
import { FC } from "react";
import { FoodCard } from "../Element/foodCard";

export type Food = {
  name: string;
  img: string;
  price: string;
};
export const ListPage: FC = (): JSX.Element => {
  //仮のデータ
  const foods: Food[] = [
    {
      name: "Banana",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "100",
    },
    {
      name: "Chocolate",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "200",
    },
    {
      name: "Ramen",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "600",
    },
    {
      name: "Curry",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "500",
    },
    {
      name: "Takoyaki",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "300",
    },
    {
      name: "Yakisoba",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "400",
    },
    {
      name: "Ikayaki",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "300",
    },
    {
      name: "Udon",
      img: "https://eiyoushi-hutaba.com/wp-content/uploads/2021/04/%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4-1024x1024.png",
      price: "600",
    },
  ];

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
        {foods.map((food: Food, i: number) => (
          <FoodCard key={i} food={food} />
        ))}
      </Group>
      <br />
    </>
  );
};
