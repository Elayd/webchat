import { FC } from "react";

interface CardLastMessageProps {
  lastMessage: string;
}
export const CardLastMessage: FC<CardLastMessageProps> = ({ lastMessage }) => {
  return (
    <div className="w-3/4 h-full border-b border-solid border-gray-500">
      <div className="h-3/4 text-gray-400 flex items-center pr-1 pl-2">
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">
          {lastMessage}
        </span>
      </div>
    </div>
  );
};
