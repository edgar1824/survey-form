import { type FC, type PropsWithChildren } from "react";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
  cache: new InMemoryCache(),
});

export const GraphQLProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
