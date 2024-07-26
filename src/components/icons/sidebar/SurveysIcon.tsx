import { type FC } from "react";
import { iconColors } from "data/sidebar";
import type { IconProps } from "types/components/icon.types";

export const SurveysIcon: FC<IconProps> = ({ active }) => {
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
        d="M16.4502 11.035L12.9102 7.49497L14.3202 6.08497L16.4402 8.20497L20.6802 3.96497L22.0902 5.37497L16.4502 11.035ZM10.9102 7.03497H1.91016V9.03497H10.9102V7.03497ZM20.9102 13.445L19.5002 12.035L16.9102 14.625L14.3202 12.035L12.9102 13.445L15.5002 16.035L12.9102 18.625L14.3202 20.035L16.9102 17.445L19.5002 20.035L20.9102 18.625L18.3202 16.035L20.9102 13.445ZM10.9102 15.035H1.91016V17.035H10.9102V15.035Z"
        fill={color}
      />
    </svg>
  );
};
