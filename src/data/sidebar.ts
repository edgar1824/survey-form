import { ImpactIcon } from "../components/icons/sidebar/ImpactIcon";
import { SurveysIcon } from "../components/icons/sidebar/SurveysIcon";
import { RoutePaths, type NavItem } from "../types/router";

export const sidebarItems = {
  impact: {
    path: `/${RoutePaths.Impact}`,
    title: "Impact",
    Icon: ImpactIcon,
  },
  surveys: {
    path: `/${RoutePaths.Surveys}`,
    title: "Surveys",
    Icon: SurveysIcon,
  },
} as const satisfies Record<string, NavItem>;

export const iconColors = {
  active: "#2E3EFF",
  inactive: "#46464F",
};
