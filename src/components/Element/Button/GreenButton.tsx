import { Button, createStyles } from "@mantine/core";
import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
  hasActive: boolean;
};

export const GreenButton: FC<Props> = ({ label, onClick, hasActive }) => {
  const { classes } = useStyles();

  return (
    <Button className={hasActive ? classes.active : ""} color="orange" variant="white" onClick={onClick}>
      {label}
    </Button>
  );
};

const useStyles = createStyles(() => ({
  active: {
    backgroundColor: "orange",
    color: "white",
  },
}));
