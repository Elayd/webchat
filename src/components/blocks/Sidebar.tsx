import { useState } from "react";
import ChatCard from "../elements/ChatCard";

const Sidebar = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleSelectChatId = (id: string) => {
    setSelectedChatId(id);
  };

  const test = [
    {
      chatId: "1",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "2",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "Second",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "3",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "Third",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "4",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "Another",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "5",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "Hello world",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "6",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "7",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "8",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "9",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "10",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "11",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "12",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
    {
      chatId: "13",
      imgSrc:
        "https://sun9-57.userapi.com/s/v1/ig2/JW1IJr-Y92U0-u26rxhX_vvh1ZE_f2ED3am36S--nDvqb3Kr1AqVsJ1g-zwKqRobFWNKLgJziGFOxNQSF6rd8dPK.jpg?quality=95&crop=377,667,1157,1157&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=msB_Q0pQ_tA9l1hI0PZvGeMHV0esruxAD1q1PxBrQz4&cs=200x200",
      headerText: "News Now",
      lastMessage: "Longs messaggreeeeeeeeeeeeeeee",
      day: "ср",
    },
  ];
  return (
    <aside className="w-full h-[75%] max-h-[75%] overflow-auto border-r border-solid border-gray-500">
      {test.map((card) => {
        return (
          <ChatCard
            chatId={card.chatId}
            imgSrc={card.imgSrc}
            headerText={card.headerText}
            day={card.day}
            lastMessage={card.lastMessage}
            isSelected={card.chatId === selectedChatId}
            onSelect={handleSelectChatId}
          />
        );
      })}
    </aside>
  );
};

export default Sidebar;
