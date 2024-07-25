import { Outlet } from "react-router-dom";
import { Layout } from ".";

export const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
