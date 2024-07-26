import { type FC } from "react";
import type { IconProps } from "types/components/icon.types";
import { iconColors } from "data/sidebar";

export const DataIcon: FC<IconProps> = ({ active }) => {
  const color = active ? iconColors?.active : iconColors?.inactive;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 13H7V17H11V13Z" fill={color} />
      <path d="M17 13H13V17H17V13Z" fill={color} />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill={color}
      />
      <path d="M11 7H7V11H11V7Z" fill={color} />
      <path d="M17 7H13V11H17V7Z" fill={color} />
    </svg>
  );
};
