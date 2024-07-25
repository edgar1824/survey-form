import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { RoutePaths } from "../types/router";
import { Root } from "../components/layout/Root";
import { Surveys } from "../pages/surveys";

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
      {
        path: RoutePaths.Impact,
        Component: () => <div>Impact</div>,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
