import { Button } from "../shared/button";
const Header = () => {
  return (
    <header className="w-full h-[20%] border-r border-b  border-solid border-gray-500">
      <div className="h-1/4 border-b  border-solid border-gray-500">create</div>
      <div className="h-2/4 w-ful flex items-center justify-center border-b  border-solid border-gray-500">
        <input className="w-11/12" placeholder="FIND" />
      </div>
      <div className="h-1/4 overflow-x-auto flex items-center  justify-around gap-1">
        <Button size="sm">aaaaa</Button>
        <Button size="sm">aaaaa</Button>
        <Button size="sm">aaaaa</Button>
      </div>
    </header>
  );
};

export default Header;
