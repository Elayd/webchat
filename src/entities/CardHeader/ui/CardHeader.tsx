import { FC } from "react";

interface CardHeaderProps {
  headerText: string;
  day: string;
}
export const CardHeader: FC<CardHeaderProps> = ({ headerText, day }) => {
  return (
    <div className="h-1/4 text-white flex flex-row justify-between pr-1 pl-2 pt-1">
      <h4>{headerText}</h4>
      <span>{day}</span>
    </div>
  );
};
