import { FC, useEffect, useState } from "react";
import { Box, Card, createStyles } from "@mantine/core";
import { orderService } from "@/modules/order/order.service";

export const Completed: FC = () => {
  const { classes } = useStyles();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    setOrderId(orderService.getOrderNum());
  }, []);

  if (orderId == null) return null;
  return (
    <Card className={classes.card}>
      <Box>ご注文ありがとうございます。</Box>
      <Box className={classes.orderNumberWrapper}>
        <Box>お客様番号</Box>
        <Box className={classes.orderNumber}>{`『${orderId}』`}</Box>
      </Box>

      <Box>この画面をスクショしてスタッフに見せてください！</Box>
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
