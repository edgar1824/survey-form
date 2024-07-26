import { Outlet, ScrollRestoration } from "react-router-dom";
import { Layout } from ".";

export const Root = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};
