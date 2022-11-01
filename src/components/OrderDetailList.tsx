import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Box, List, Text } from "@mantine/core";
import { CartState } from "@/globalStates/atoms/cartState";

export const OrderDetailList: FC = () => {
  const cart = useRecoilValue(CartState);
  if (!cart.length) {
    return null;
  }

  return (
    <Box my={20}>
      <Text size="lg" weight={700}>
        注文内容一覧
      </Text>
      {cart.map((item) => (
        <List key={item.menuId} mt={5} withPadding>
          <List.Item>
            <Text size="md">
              {item.name} ︎ {item.quantity}
            </Text>
          </List.Item>
        </List>
      ))}
    </Box>
  );
};
