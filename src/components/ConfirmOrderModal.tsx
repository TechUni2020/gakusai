import { Box, Button, createStyles, List, Modal, SimpleGrid, Text } from "@mantine/core";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { orderRepository } from "@/modules/order/order.repository";
import { CartState } from "@/globalStates/atoms/cartState";
import { totalQuantitySelector } from "@/globalStates/atoms/cartState/selectors/totalQuantitySelector";
import { totalPriceSelector } from "@/globalStates/atoms/cartState/selectors/totalPriceSelector";

type Props = {
  opened: boolean;
  setOpened: (open: boolean) => void;
};

const useStyles = createStyles(() => ({
  buttonWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#D3F9D8",
  },
}));

const ReceivingPredictionTime: FC = () => {
  const { classes } = useStyles();

  return (
    <Box my={20}>
      <Text>受け取り希望時間</Text>
      <Text size="xs">受け取りたい時間を選択してください</Text>
      <Box className={classes.buttonWrapper}>
        <Button color="green" variant="white">
          今から
        </Button>
        <Button color="green" variant="white">
          10分後
        </Button>
        <Button color="green" variant="white">
          20分後
        </Button>
        <Button color="green" variant="white">
          30分後
        </Button>
        <Button color="green" variant="white">
          その他
        </Button>
      </Box>
    </Box>
  );
};

const OrderDescription: FC = () => {
  const cart = useRecoilValue(CartState);
  if (!cart.length) {
    return null;
  }

  return (
    <Box my={20}>
      <Text>注文内容一覧</Text>
      {cart.map((item) => (
        <List key={item.menuId} withPadding>
          <List.Item>
            {item.name} ︎ {item.quantity}
          </List.Item>
        </List>
      ))}
    </Box>
  );
};

export const ConfirmOrderModal: FC<Props> = ({ opened, setOpened }) => {
  const cart = useRecoilValue(CartState);
  const totalQuantity = useRecoilValue(totalQuantitySelector);
  const totalPrice = useRecoilValue(totalPriceSelector);

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false} title="注文の確定">
      <Text color="red" weight={500} size="xs">
        ※ 注文を確定すると、受け渡しが完了するまで注文の変更・追加ができません
      </Text>
      <OrderDescription />
      <ReceivingPredictionTime />
      <SimpleGrid cols={2} spacing="lg">
        <Button color="gray" onClick={() => setOpened(false)} disabled={false}>
          キャンセル
        </Button>
        <Button onClick={() => orderRepository.create(cart, totalQuantity, totalPrice)} disabled={false}>
          確定する
        </Button>
      </SimpleGrid>
    </Modal>
  );
};
