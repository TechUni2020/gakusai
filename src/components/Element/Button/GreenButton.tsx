import { Button } from "@mantine/core";
import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
};

export const GreenButton: FC<Props> = ({ label, onClick }) => (
  <Button
    sx={{
      "&:hover": {
        backgroundColor: "green",
        color: "white",
      },
    }}
    color="green"
    variant="white"
    onClick={onClick}
  >
    {label}
  </Button>
);
