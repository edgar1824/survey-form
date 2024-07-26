import { type FC } from "react";
import { iconColors } from "../../../data/sidebar";
import type { IconProps } from "../../../types/components/icon.types";

export const ReportingIcon: FC<IconProps> = ({ active }) => {
  const color = active ? iconColors?.active : iconColors?.inactive;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 9H4V20H8V9Z" fill={color} />
      <path d="M20 13H16V20H20V13Z" fill={color} />
      <path d="M14 4H10V20H14V4Z" fill={color} />
    </svg>
  );
};
