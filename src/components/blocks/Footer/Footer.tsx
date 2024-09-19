import { Link } from "react-router-dom";
import { Button } from "../../shared/button";
import { LogoutButton } from "./components/LogoutButton";

const Footer = () => {
  return (
    <footer className="h-[5%] w-full border-r border-t border-solid border-gray-500">
      <div className=" h-full overflow-x-auto flex items-center  justify-between pr-4 pl-4 ">
        <Link to="/settings">
          <Button size="lg">Settings</Button>
        </Link>
        <LogoutButton />
      </div>
    </footer>
  );
};

export default Footer;
