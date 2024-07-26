import { type FC } from "react";
import type { IconProps } from "../../../types/components/icon.types";
import { iconColors } from "../../../data/sidebar";

export const TasksIcon: FC<IconProps> = ({ active }) => {
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
        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8.82 13.05L7.4 14.46L10.94 18L16.6 12.34L15.19 10.93L10.95 15.17L8.82 13.05Z"
        fill={color}
      />
    </svg>
  );
};
