import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { RoutePaths } from "../types/router";
import { Root } from "../components/layout/Root";
import { Surveys } from "../pages/surveys";
import { sidebarItems } from "../data/sidebar";
import { MainTitle } from "../components/titles/MainTitle";

const router = createBrowserRouter([
  {
    path: RoutePaths.Root,
    Component: Root,
    children: [
      {
        index: true,
        loader: () => redirect(RoutePaths.Surveys),
      },
      {
        path: RoutePaths.Surveys,
        Component: Surveys,
      },
      ...Object.values(sidebarItems).map(
        ({ path, title }) =>
          ({
            path,
            Component: () => <MainTitle>{title}</MainTitle>,
          } as RouteObject)
      ),
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
