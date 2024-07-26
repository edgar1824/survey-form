import { ConfigurationIcon } from "../components/icons/sidebar/ConfigurationIcon";
import { DataIcon } from "../components/icons/sidebar/DataIcon";
import { DocsIcon } from "../components/icons/sidebar/DocsIcon";
import { FlowsIcon } from "../components/icons/sidebar/FlowsIcon";
import { GovernanceIcon } from "../components/icons/sidebar/GovernanceIcon";
import { ImpactIcon } from "../components/icons/sidebar/ImpactIcon";
import { IntelligenceIcon } from "../components/icons/sidebar/IntelligenceIcon";
import { LearnIcon } from "../components/icons/sidebar/LearnIcon";
import { ReportingIcon } from "../components/icons/sidebar/ReportingIcon";
import { SupportIcon } from "../components/icons/sidebar/SupportIcon";
import { SurveysIcon } from "../components/icons/sidebar/SurveysIcon";
import { TasksIcon } from "../components/icons/sidebar/TasksIcon";
import { RoutePaths, type NavItem } from "../types/router";

export const sidebarItems = {
  impact: {
    path: `/${RoutePaths.Impact}`,
    title: "Impact",
    Icon: ImpactIcon,
  },
  data: {
    path: `/${RoutePaths.Data}`,
    title: "Data",
    Icon: DataIcon,
  },
  reporting: {
    path: `/${RoutePaths.Reporting}`,
    title: "Reporting",
    Icon: ReportingIcon,
  },
  learn: {
    path: `/${RoutePaths.Learn}`,
    title: "Learn",
    Icon: LearnIcon,
  },
  governance: {
    path: `/${RoutePaths.Governance}`,
    title: "Governance",
    Icon: GovernanceIcon,
  },
  docs: {
    path: `/${RoutePaths.Docs}`,
    title: "Docs",
    Icon: DocsIcon,
  },
  intelligence: {
    path: `/${RoutePaths.Intelligence}`,
    title: "Intelligence",
    Icon: IntelligenceIcon,
  },
  surveys: {
    path: `/${RoutePaths.Surveys}`,
    title: "Surveys",
    Icon: SurveysIcon,
  },
  flows: {
    path: `/${RoutePaths.Flows}`,
    title: "Flows",
    Icon: FlowsIcon,
  },
  tasks: {
    path: `/${RoutePaths.Tasks}`,
    title: "Tasks",
    Icon: TasksIcon,
  },
  configuration: {
    path: `/${RoutePaths.Configuration}`,
    title: "Configuration",
    Icon: ConfigurationIcon,
  },
  support: {
    path: `/${RoutePaths.Support}`,
    title: "Support",
    Icon: SupportIcon,
  },
} as const satisfies Record<string, NavItem>;

export const iconColors = {
  active: "#2E3EFF",
  inactive: "#46464F",
};
