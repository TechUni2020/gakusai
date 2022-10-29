import { Center, Divider, Grid, Title } from "@mantine/core";
import { FC } from "react";
import { CartToggle } from "../CartToggle";

export const Header: FC = () => {
  return (
    <>
      <Grid>
        <Grid.Col span="content">
          <CartToggle />
        </Grid.Col>
        <Grid.Col span="content">
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
