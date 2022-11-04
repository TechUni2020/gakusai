import { FC } from "react";
import { Box, List, Text } from "@mantine/core";
import { Cart } from "@/type/Cart";

interface Props {
  textColor?: string;
  list: Cart;
}

export const OrderDetailList: FC<Props> = ({ list, textColor = "black" }) => {
  if (!list.length) {
    return null;
  }

  return (
    <Box my={20}>
      <Text size="lg" weight={700}>
        注文内容一覧
      </Text>
      {list.map((item) => (
        <List key={item.menuId} mt={5} withPadding>
          <List.Item>
            <Text size="md" color={textColor}>
              {item.name} ︎ {item.quantity}
            </Text>
          </List.Item>
        </List>
      ))}
    </Box>
  );
};
