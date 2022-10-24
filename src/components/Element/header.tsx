import { Center, Divider, Title } from "@mantine/core";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      <Center>
        <Title order={3} my={8} color="orange">
          Mobile Order
        </Title>
      </Center>
      <Divider color="orange"></Divider>
    </>
  );
};
