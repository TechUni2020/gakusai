import { FC } from "react";
import { Text, Box, Card, createStyles, Center, Divider, Image } from "@mantine/core";
import { useOrderState } from "@/globalStates/atoms/orderState";
import { OrderDetailList } from "@/components/OrderDetailList";
import { timeStampToTimeStr } from "@/lib/util/date-utils";

export const Completed: FC = () => {
  const { classes } = useStyles();
  const { order } = useOrderState();

  if (order === null) return null;
  const { orderId, orderedAt, detail, sumPrice } = order;

  const formattedOrderedAt = timeStampToTimeStr(orderedAt.seconds);
  return (
    <Card className={classes.card}>
      <Center>
        <Text>ご注文ありがとうございます</Text>
      </Center>
      <Divider my="sm" />

      <Box className={classes.orderColumnWrapper}>
        <Image src="/TechUni.svg" alt="TechUniのアイコン" />
        <Box>
          <Text>ご注文番号：</Text>
          <Text className={classes.orderNumber}>{`『${orderId}』`}</Text>
        </Box>
      </Box>
      <Text align="center">{formattedOrderedAt}に受付しました</Text>
      <br />
      <Text align="center">この画面をスクショして</Text>
      <Text align="center">スタッフにお見せください!</Text>
      <Divider my="sm" />
      <OrderDetailList textColor={"white"} list={detail} />
      <Divider my="sm" />
      <Box className={classes.sumPriceWrapper}>
        <Text size="sm">合計金額</Text>
        <Text size="xl">{sumPrice}円</Text>
      </Box>
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
  sumPriceWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    margin: 7,
  },
});
