import { FC, useEffect, useState } from "react";
import { Box, Card, createStyles, Title, Text } from "@mantine/core";
import { congestionRepository } from "@/modules/congestion/congestion.repository";
import { Congestion as CongestionEntity } from "@/modules/congestion/congestion.entity";

export const Congestion: FC = () => {
  const { classes } = useStyles();
  const [congestion, setCongestion] = useState<CongestionEntity | null>(null);

  useEffect(() => {
    const getCongestion = async () => {
      const res = await congestionRepository.findOne();
      setCongestion(res);
    };
    getCongestion();
  }, []);

  if (congestion == null) return null;

  return (
    <Card className={classes.container} sx={{ backgroundColor: congestion.color }}>
      <Title order={2} size={20}>
        現在の混雑度
      </Title>
      <Box className={classes.iconWrapper}>
        <Text size={20}>{congestion.icon}</Text>
        <Text size={15} ml={5}>
          {congestion.text}
        </Text>
      </Box>
    </Card>
  );
};

const useStyles = createStyles(() => ({
  container: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 20px 0",
  },

  iconWrapper: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
}));
