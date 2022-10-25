import { Card, createStyles, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Menu } from "@/type/Menu";

type Props = {
  menu: Menu;
};

export const MenuCard: FC<Props> = ({ menu }) => {
  const { classes } = useStyles();
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
