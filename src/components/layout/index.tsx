import { Container } from "@mui/material";
import { type FC, type PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        my: 5,
        gap: 8,
      }}
    >
      <Sidebar />
      <Container
        sx={{ border: "1px solid #C7C5D0", borderRadius: "16px", p: 4 }}
      >
        {children}
      </Container>
    </Container>
  );
};
