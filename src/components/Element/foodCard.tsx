import { Card, createStyles, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Food } from "../Page/listPage";

type Props = {
  food: Food;
};

export const FoodCard: FC<Props> = ({ food }) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder>
        <Image className={classes.image} src={food.image} alt="商品の画像" />
      </Card.Section>
      <div className={classes.docs}>
        <Title order={4}>{food.name}</Title>
        <Text>¥{food.price}</Text>
      </div>
    </Card>
  );
};

const useStyles = createStyles((theme) => ({
  card: {
    width: "48%",
    [theme.fn.largerThan("xs")]: {
      width: "200px",
    },
    background: "orange",
  },
  image: {
    background: "white",
  },
  docs: {
    marginTop: 12,
    color: "white",
  },
}));
