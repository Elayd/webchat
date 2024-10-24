import { CardAvatar } from "@/entities/CardAvatar";
import { CardHeader } from "@/entities/CardHeader";
import { CardLastMessage } from "@/entities/CardLastMessage";
import { Link } from "react-router-dom";

interface IChatCard {
  imgSrc: string;
  headerText: string;
  lastMessage: string;
  day: string;
  chatId: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

// Поправить верстку
export const ChatCard = (props: IChatCard) => {
  const { imgSrc, headerText, lastMessage, day, chatId, onSelect, isSelected } =
    props;

  return (
    <Link to={`${chatId}`} onClick={() => onSelect(chatId)}>
      <div
        className={`w-full h-20 flex ${
          isSelected ? "bg-blue-500" : "bg-gray-800"
        }`}
      >
        <CardAvatar imgSrc={imgSrc} />
        <CardHeader headerText={headerText} day={day} />
        <CardLastMessage lastMessage={lastMessage} />
      </div>
    </Link>
  );
};
