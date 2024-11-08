import { FC } from "react";

interface CardLastMessageProps {
  lastMessage: string;
}
export const CardLastMessage: FC<CardLastMessageProps> = ({ lastMessage }) => {
  return (
    <span className="min-w-[240px] max-w-[240px] text-gray-400 text-sm h-10 truncate">
      {lastMessage}
    </span>
  );
};
