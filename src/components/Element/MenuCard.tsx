import { OperateCart } from "@/globalStates/atoms/cartState/operateCart";
import { Menu } from "@/type/Menu";
import { Box, Button, Card, createStyles, Image, Text, Title } from "@mantine/core";
import { FC } from "react";

type Props = {
  menu: Menu;
};

export const MenuCard: FC<Props> = ({ menu }) => {
  const { classes } = useStyles();
  const { addToCart } = OperateCart();
  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section withBorder>
        <Image className={classes.image} src={menu.image} alt="商品の画像" />
      </Card.Section>
      <div className={classes.docs}>
        <Title order={4}>{menu.name}</Title>
        <Text>¥{menu.price}</Text>
        {/* Todo 後でstylingする */}
        <Text>{menu.description}</Text>
      </div>
      <Button color="lime" fullWidth onClick={() => addToCart(menu)}>
        <Box>追加</Box>
      </Button>
    </Card>
  );
};

const useStyles = createStyles(() => ({
  card: {
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
