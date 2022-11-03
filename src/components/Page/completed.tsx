import { FC } from "react";
import { Text, Box, Card, createStyles } from "@mantine/core";
import { useOrderState } from "@/globalStates/atoms/orderState";
import { OrderDetailList } from "@/components/OrderDetailList";

export const Completed: FC = () => {
  const { classes } = useStyles();
  const { order } = useOrderState();

  if (order == null) return null;
  const { orderId, orderedAt, detail, sumPrice } = order;

  return (
    <Card className={classes.card}>
      <Box>ご注文ありがとうございます。</Box>
      <Box className={classes.orderColumnWrapper}>
        <Box>お客様番号</Box>
        <Box className={classes.orderNumber}>{`『${orderId}』`}</Box>
      </Box>
      <Box className={classes.orderColumnWrapper}>
        <Box>注文時間</Box>
        <Text>{String(orderedAt)}</Text>
      </Box>
      <OrderDetailList list={detail} />
      <Box className={classes.orderColumnWrapper}>
        <Box>合計金額</Box>
        <Text size="xl">{sumPrice}円</Text>
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
    height: "100%",
  },
  orderColumnWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: "10px",
  },
  orderNumber: {
    fontSize: "30px",
  },
});
