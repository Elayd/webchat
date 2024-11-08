import {Link} from "react-router-dom";
import {Button} from "@/common/ui/Button/Button.tsx";
import {LogoutButton} from "../../../features/LogoutButton/index.ts";


export const Footer = () => {
  return (
    <footer className="h-[10%] md:h-[5%] w-full border-r border-t border-solid border-gray-500">
      <div className=" h-full overflow-x-auto flex items-center  justify-end gap-4 pr-4 ">
        <Link to="/settings">
          <Button size="sm">Settings</Button>
        </Link>
        <LogoutButton />
      </div>
    </footer>
  );
};
