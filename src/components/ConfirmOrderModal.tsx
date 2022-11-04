import { Button, Modal, SimpleGrid, Text } from "@mantine/core";
import { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { orderRepository } from "@/modules/order/order.repository";
import { CartState } from "@/globalStates/atoms/cartState";
import { totalQuantitySelector } from "@/globalStates/atoms/cartState/selectors/totalQuantitySelector";
import { totalPriceSelector } from "@/globalStates/atoms/cartState/selectors/totalPriceSelector";
import { ReceivingPredictionTime } from "@/components/ReceivingPredictionTime";
import { OrderDetailList } from "@/components/OrderDetailList";
import { ReceivingTimeKey } from "@/type/Order";
import { pagesPath } from "@/lib/$path";
import { useOrder } from "@/globalStates/atoms/orderState/useOrder";

type Props = {
  opened: boolean;
  setOpened: (open: boolean) => void;
};

export const ConfirmOrderModal: FC<Props> = ({ opened, setOpened }) => {
  const router = useRouter();
  const cart = useRecoilValue(CartState);
  const totalQuantity = useRecoilValue(totalQuantitySelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const [receivingTimeKey, setReceivingTimeKey] = useState<ReceivingTimeKey>("now");

  const { createOrderState } = useOrder();
  const onClickOrderButton = async () => {
    try {
      await orderRepository.create(cart, totalQuantity, totalPrice, receivingTimeKey, createOrderState);
      setOpened(false);
      router.push(pagesPath.completed.$url());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
      <Text size="xl" weight={700}>
        注文の確定
      </Text>
      <Text color="red" weight={500} size="xs">
        ※ 注文を確定すると、受け渡しが完了するまで注文の変更・追加ができません
      </Text>
      <OrderDetailList list={cart} />
      <ReceivingPredictionTime setReceivingTimeKey={setReceivingTimeKey} receivingTimeKey={receivingTimeKey} />
      <SimpleGrid cols={2} spacing="lg">
        <Button color="gray" onClick={() => setOpened(false)}>
          キャンセル
        </Button>
        <Button onClick={onClickOrderButton} disabled={!cart.length}>
          確定する
        </Button>
      </SimpleGrid>
    </Modal>
  );
};
