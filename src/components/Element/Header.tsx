import { Center, createStyles, Divider, Grid, Title } from "@mantine/core";
import { FC } from "react";
import { CartToggle } from "../CartToggle";

export const Header: FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Grid>
        <Grid.Col span="content" className={classes.cart}>
          <CartToggle />
        </Grid.Col>
        <Grid.Col className={classes.title}>
          <Center>
            <Title order={3} my={8} color="orange">
              Mobile Order
            </Title>
          </Center>
        </Grid.Col>
      </Grid>
      <Divider color="orange"></Divider>
    </>
  );
};

const useStyles = createStyles(() => ({
  cart: {
    position: "absolute",
    justifySelf: "left",
  },
  title: {
    justifySelf: "center",
  },
}));
