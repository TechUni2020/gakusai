import { COLLECTION_PATH } from "@/constants/path";
import { TOKEN_LABEL } from "@/constants/token_label";
import { db } from "@/lib/firebase";
import { CartState, decrementItem, incrementItem, removeFromCart, reset } from "@/store/modules/cartOperation";
import { Menu } from "@/type/Menu";
import { ActionIcon, Button, Center, Divider, Grid, Group, Popover } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";
import { arrayUnion, doc, increment, updateDoc } from "firebase/firestore";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartToggle: FC = () => {
  const state = useSelector((state) => state) as CartState;
  const dispatch = useDispatch();
  const { USER_ID } = TOKEN_LABEL;
  const { USER_PATH } = COLLECTION_PATH;

  const updateUser = async () => {
    const uid = localStorage.getItem(USER_ID) as string;
    const userRef = doc(db, USER_PATH, uid);
    await updateDoc(userRef, {
      orderList: arrayUnion(...state.cart),
      sumOfPay: increment(state.sumOfPrice),
      uuid: uid,
    });
    dispatch(reset());
  };

  return (
    <Popover position="bottom">
      <Popover.Target>
        <Group mx={24} my={2}>
          <ActionIcon size={48}>
            <IconShoppingCart />
            <div>{state.numberInCart}</div>
          </ActionIcon>
        </Group>
      </Popover.Target>
      <Popover.Dropdown mx={24}>
        {state.cart.length ? (
          <>
            {state.cart.map((item: Menu) => (
              <div key={item.id}>
                <Grid my={4}>
                  <Grid.Col span="auto">
                    <Button size="xs" color="red" onClick={() => dispatch(removeFromCart(item))}>
                      ×
                    </Button>
                  </Grid.Col>
                  <Grid.Col span="auto">{item.name}</Grid.Col>
                  <Grid.Col span="auto">×{item.quantity}</Grid.Col>
                  <Grid.Col span="auto">
                    <Grid mt={2}>
                      <Button size="xs" color="lime" onClick={() => dispatch(incrementItem(item))}>
                        +
                      </Button>
                      <Button size="xs" color="lime" onClick={() => dispatch(decrementItem(item))}>
                        -
                      </Button>
                    </Grid>
                  </Grid.Col>
                </Grid>
                <Divider></Divider>
                <br />
              </div>
            ))}
            <Center>カートの合計金額: {state.sumOfPrice}円</Center>
            <br />
            <Center>
              <Button color="lime" onClick={updateUser}>
                注文確定して購入
              </Button>
            </Center>
          </>
        ) : (
          <div>カートは空です</div>
        )}
      </Popover.Dropdown>
    </Popover>
  );
};
