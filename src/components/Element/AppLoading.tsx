import { createStyles, Loader } from "@mantine/core";
import { FC } from "react";

export const AppLoading: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Loader size={"lg"} />
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
