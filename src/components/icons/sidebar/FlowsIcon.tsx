import { type FC } from "react";
import type { IconProps } from "types/components/icon.types";
import { iconColors } from "data/sidebar";

export const FlowsIcon: FC<IconProps> = ({ active }) => {
  const color = active ? iconColors?.active : iconColors?.inactive;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 8.7C17.04 10.2 14 12.87 13.5 17H15.5V19H9.5V17H11.5C11 12.5 7.13 9 2.5 9V7C6.89 7 10.72 9.55 12.5 13.3C13.88 10.33 16.36 8.27 18.46 6.99L14.5 7V5H21.5V12H19.5V8.7Z"
        fill={color}
      />
    </svg>
  );
};
