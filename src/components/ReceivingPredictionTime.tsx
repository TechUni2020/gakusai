import { Dispatch, FC, SetStateAction } from "react";
import { Box, Button, createStyles, Text } from "@mantine/core";
import { ReceivingTimeKey } from "@/type/Order";

type Props = {
  setReceivingTimeKey: Dispatch<SetStateAction<ReceivingTimeKey>>;
};

export const ReceivingPredictionTime: FC<Props> = ({ setReceivingTimeKey }) => {
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
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          color="green"
          variant="white"
          onClick={() => {
            setReceivingTimeKey("now");
          }}
        >
          今から
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          color="green"
          variant="white"
          onClick={() => {
            setReceivingTimeKey("10min");
          }}
        >
          10分後
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          color="green"
          variant="white"
          onClick={() => {
            setReceivingTimeKey("20min");
          }}
        >
          20分後
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          color="green"
          variant="white"
          onClick={() => {
            setReceivingTimeKey("30min");
          }}
        >
          30分後
        </Button>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          color="green"
          variant="white"
          onClick={() => {
            setReceivingTimeKey("unknown");
          }}
        >
          その他
        </Button>
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
