import { Outlet, useLocation } from "react-router-dom";
import {Header} from "../components/Header/index.ts";
import {Sidebar} from "../components/Sidebar/index.ts";
import {Footer} from "../components/Footer/index.ts";

const Chat = () => {
  const location = useLocation();
  const isChatOpen = location.pathname.includes("/chat/");

  return (
    <div className="h-full w-full flex">
      {!isChatOpen && (
        <div className="h-full w-full md:w-[340px] lg:w-[340px] xl:w-[340px] bg-gray-800 border-r border-solid border-gray-500">
          <Header />
          <Sidebar />
          <Footer />
        </div>
      )}
      <div className={`flex-grow h-full bg-gray-800`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
