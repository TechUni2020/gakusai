import { FC, useEffect, useState } from "react";
import { Box, Button, Card, createStyles, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { orderService } from "@/modules/order/order.service";
import { TOKEN_LABEL } from "@/constants/token_label";
import { pagesPath } from "@/lib/$path";
import { CartState } from "@/globalStates/atoms/cartState";

export const Completed: FC = () => {
  const { classes } = useStyles();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ORDER_ID } = TOKEN_LABEL;
  const router = useRouter();
  const setCart = useSetRecoilState(CartState);

  useEffect(() => {
    setOrderId(orderService.getOrderNum());
  }, []);

  const onClickCheckButton = () => {
    setIsOpen(true);
    localStorage.removeItem(ORDER_ID);
    router.push(pagesPath.$url());
    setCart([]);
  };

  if (orderId == null) return null;
  return (
    <Card className={classes.card}>
      <Box>ご注文ありがとうございます。</Box>
      <Box className={classes.orderNumberWrapper}>
        <Box>お客様番号</Box>
        <Box className={classes.orderNumber}>{`『${orderId}』`}</Box>
      </Box>

      <Box>この画面をスクショしてスタッフに見せてください！</Box>

      <Button onClick={() => setIsOpen(true)}>商品を受け取りました</Button>
      <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
        <Box>この注文画面には戻れなくなりますがよろしいでしょうか？？</Box>
        <Button onClick={onClickCheckButton}>確認</Button>
      </Modal>
    </Card>
  );
};

const useStyles = createStyles({
  card: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "orange",
    borderRadius: "16px",
    margin: 16,
  },
  orderNumberWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    margin: "10px 0",
  },
  orderNumber: {
    fontSize: "30px",
  },
});
