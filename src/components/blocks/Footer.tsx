import { Link } from "react-router-dom";
import { Button } from "../shared/button";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="h-[5%] w-full border-r border-t border-solid border-gray-500">
      <div className=" h-full overflow-x-auto flex items-center  justify-end pr-4">
        <Link to="/settings">
          <Button size="lg">Settings</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
