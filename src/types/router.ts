import type { FC } from "react";
import type { IconProps } from "./components/icon.types";

export enum RoutePaths {
  Root = "/",
  Impact = "impact",
  Surveys = "surveys",
}

export interface NavItem {
  path: string;
  title: string;
  Icon: FC<IconProps>;
}
