import Typography from "@mui/material/Typography";
import { type FC, type PropsWithChildren } from "react";

export const MainTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        color: "#1B1B1F",
        fontSize: "22px",
        textAlign: "center",
        lineHeight: "28px",
      }}
    >
      {children}
    </Typography>
  );
};
