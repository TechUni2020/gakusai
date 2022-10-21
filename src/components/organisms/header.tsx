import { Center, Divider, Title } from "@mantine/core";

export const Header = () => {
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
