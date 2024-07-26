import type { FC } from "react";
import type { IconProps } from "./components/icon.types";

export enum RoutePaths {
  Root = "/",
  Impact = "impact",
  Surveys = "surveys",
  Data = "data",
  Reporting = "reporting",
  Learn = "learn",
  Governance = "governance",
  Docs = "docs",
  Intelligence = "intelligence",
  Flows = "flows",
  Tasks = "tasks",
  Configuration = "configuration",
  Support = "support",
}

export interface NavItem {
  path: string;
  title: string;
  Icon: FC<IconProps>;
}
