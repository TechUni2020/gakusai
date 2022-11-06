import { ActionIcon, Button, Center, Divider, Grid, Group, Popover } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";
import { FC, useState } from "react";
import { useRecoilValue } from "recoil";

import { ConfirmOrderModal } from "@/components/ConfirmOrderModal";
import { CartState } from "@/globalStates/atoms/cartState";
import { OperateCart } from "@/globalStates/atoms/cartState/operateCart";
import { totalPriceSelector } from "@/globalStates/atoms/cartState/selectors/totalPriceSelector";
import { totalQuantitySelector } from "@/globalStates/atoms/cartState/selectors/totalQuantitySelector";
import { ItemInCart } from "@/type/Cart";

export const CartToggle: FC = () => {
  const [openedCartToggle, setOpenedCartToggle] = useState(false);
  const [openedConfirmModal, setOpenedConfirmModal] = useState(false);

  const cart = useRecoilValue(CartState);
  const totalQuantity = useRecoilValue(totalQuantitySelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const { removeFromCart, incrementItem, decrementItem } = OperateCart();

  const onClickConfirmOrder = () => {
    setOpenedCartToggle(false);
    setOpenedConfirmModal(true);
  };

  return (
    <>
      <ConfirmOrderModal opened={openedConfirmModal} setOpened={setOpenedConfirmModal} />

      <Popover opened={openedCartToggle} onChange={setOpenedCartToggle} position="bottom" width={"380px"}>
        <Popover.Target>
          <Group onClick={() => setOpenedCartToggle((isOpen) => !isOpen)} mx={24} my={2}>
            <ActionIcon size={48}>
              <IconShoppingCart />
              <div>{totalQuantity}</div>
            </ActionIcon>
          </Group>
        </Popover.Target>

        <Popover.Dropdown>
          {cart.length ? (
            <>
              {cart.map((item: ItemInCart) => (
                <div key={item.menuId}>
                  <Grid my={4}>
                    <Grid.Col span="auto">
                      <Button size="xs" color="red" onClick={() => removeFromCart(item)}>
                        ×
                      </Button>
                    </Grid.Col>
                    <Grid.Col span="auto">{item.name}</Grid.Col>
                    <Grid.Col span="auto">×{item.quantity}</Grid.Col>
                    <Grid.Col span="auto">
                      <Grid mt={2}>
                        <Button size="xs" mr={2} variant="filled" color="orange" onClick={() => incrementItem(item)}>
                          +
                        </Button>
                        <Button size="xs" variant="filled" color="orange" onClick={() => decrementItem(item)}>
                          −
                        </Button>
                      </Grid>
                    </Grid.Col>
                  </Grid>
                  <Divider></Divider>
                  <br />
                </div>
              ))}
              <Center> カートの合計金額: {totalPrice} 円</Center>
              <br />
              <Center>
                <Button variant="filled" color="orange" onClick={onClickConfirmOrder}>
                  購入
                </Button>
              </Center>
            </>
          ) : (
            <div>カートは空です</div>
          )}
        </Popover.Dropdown>
      </Popover>
    </>
  );
};
