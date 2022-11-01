import { Button, Modal, SimpleGrid, Text } from "@mantine/core";
import { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { orderRepository } from "@/modules/order/order.repository";
import { CartState } from "@/globalStates/atoms/cartState";
import { totalQuantitySelector } from "@/globalStates/atoms/cartState/selectors/totalQuantitySelector";
import { totalPriceSelector } from "@/globalStates/atoms/cartState/selectors/totalPriceSelector";
import { ReceivingPredictionTime } from "@/components/ReceivingPredictionTime";
import { OrderDetailList } from "@/components/OrderDetailList";
import { ReceivingTimeKey } from "@/type/Order";

type Props = {
  opened: boolean;
  setOpened: (open: boolean) => void;
};

export const ConfirmOrderModal: FC<Props> = ({ opened, setOpened }) => {
  const cart = useRecoilValue(CartState);
  const totalQuantity = useRecoilValue(totalQuantitySelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const [receivingTimeKey, setReceivingTimeKey] = useState<ReceivingTimeKey>("unknown");

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
      <Text size="xl" weight={700}>
        注文の確定
      </Text>
      <Text color="red" weight={500} size="xs">
        ※ 注文を確定すると、受け渡しが完了するまで注文の変更・追加ができません
      </Text>
      <OrderDetailList />
      <ReceivingPredictionTime setReceivingTimeKey={setReceivingTimeKey} />
      <SimpleGrid cols={2} spacing="lg">
        <Button color="gray" onClick={() => setOpened(false)}>
          キャンセル
        </Button>
        <Button
          onClick={() => orderRepository.create(cart, totalQuantity, totalPrice, receivingTimeKey)}
          disabled={!cart.length}
        >
          確定する
        </Button>
      </SimpleGrid>
    </Modal>
  );
};