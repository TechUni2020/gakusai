import { Dispatch, FC, SetStateAction } from "react";
import { Box, createStyles, Text } from "@mantine/core";
import { ReceivingTimeKey } from "@/type/Order";
import { GreenButton } from "@/components/Element/Button/GreenButton";

type Props = {
  receivingTimeKey: ReceivingTimeKey;
  setReceivingTimeKey: Dispatch<SetStateAction<ReceivingTimeKey>>;
};

export const ReceivingPredictionTime: FC<Props> = ({ receivingTimeKey, setReceivingTimeKey }) => {
  const { classes } = useStyles();

  return (
    <Box my={20}>
      <Text size="lg" weight={700}>
        受け取り希望時間
      </Text>
      <Text size="xs" mt={2}>
        受け取りたい時間を選択してください
      </Text>
      <Box className={classes.buttonWrapper}>
        <GreenButton label="今" hasActive={receivingTimeKey === "now"} onClick={() => setReceivingTimeKey("now")} />
        <GreenButton
          label="5分後"
          hasActive={receivingTimeKey === "5min"}
          onClick={() => setReceivingTimeKey("5min")}
        />
        <GreenButton
          label="15分後"
          hasActive={receivingTimeKey === "10min"}
          onClick={() => setReceivingTimeKey("10min")}
        />
        <GreenButton
          label="30分後"
          hasActive={receivingTimeKey === "30min"}
          onClick={() => setReceivingTimeKey("30min")}
        />
      </Box>
    </Box>
  );
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
