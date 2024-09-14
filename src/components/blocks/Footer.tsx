import { Button } from "../shared/button";

const Footer = () => {
  return (
    <footer className="h-full w-full bg-red-500 flex">
      <div className="h-full w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12 flex items-center justify-center gap-2 flex-wrap">
        <Button className=" flex-1 min-w-[15px]">TEST</Button>
        <Button className="flex-1 min-w-[15px]">TEST</Button>
        <Button className="flex-1 min-w-[15px]">TEST</Button>
      </div>
      <div className="h-full w-8/12 md:w-8/12 lg:w-9/12 xl:w-10/12 flex justify-center items-center">
        SEARCH
      </div>
    </footer>
  );
};

export default Footer;
