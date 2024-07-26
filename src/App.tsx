import { createTheme, ThemeProvider } from "@mui/material";
import { GraphQLProvider } from "./gql";
import { Router } from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E3EFF",
    },
  },
});

function App() {
  return (
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GraphQLProvider>
  );
}

export default App;
