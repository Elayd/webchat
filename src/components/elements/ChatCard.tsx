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
const ChatCard = (props: IChatCard) => {
  const { imgSrc, headerText, lastMessage, day, chatId, onSelect, isSelected } =
    props;

  return (
    <Link to={`${chatId}`} onClick={() => onSelect(chatId)}>
      <div
        className={`w-full h-20 flex ${
          isSelected ? "bg-blue-500" : "bg-gray-800"
        }`}
      >
        <div className="w-1/4 flex justify-center items-center">
          <img
            src={imgSrc}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="w-3/4 h-full border-b border-solid border-gray-500">
          <div className="h-1/4 text-white flex flex-row justify-between pr-1 pl-2 pt-1">
            <h4>{headerText}</h4>
            <span>{day}</span>
          </div>
          <div className="h-3/4 text-gray-400 flex items-center pr-1 pl-2">
            <span className="overflow-hidden whitespace-nowrap text-ellipsis">
              {lastMessage}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
