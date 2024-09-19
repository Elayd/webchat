import Footer from "@/components/blocks/Footer/Footer";
import Header from "@/components/blocks/Header";
import Sidebar from "@/components/blocks/Sidebar";

import { Outlet } from "react-router-dom";

export const Chat = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12 dark bg-gray-800 border-l border-solid border-gray-500">
        <Header />
        <Sidebar />
        <Footer />
      </div>
      <div className="h-full w-8/12 md:w-8/12 lg:w-9/12 xl:w-10/12 bg-gray-800">
        <Outlet />
      </div>
    </div>
  );
};
