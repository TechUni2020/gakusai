import { Center, createStyles, Divider, Stack } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Divider color="orangge"></Divider>
      <Stack align="center">
        <Center>Copyright ©︎ 2022 Tech.Uni</Center>
      </Stack>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    background: "orange",
    color: "white",
  },
}));
