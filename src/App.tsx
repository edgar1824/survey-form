import { GraphQLProvider } from "./gql";
import { Router } from "./routes";

function App() {
  return (
    <>
      <GraphQLProvider>
        <Router />
      </GraphQLProvider>
    </>
  );
}

export default App;
