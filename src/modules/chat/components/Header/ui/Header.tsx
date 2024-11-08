import {HeaderFinder} from "../../../features/HeaderFinder/index.ts";
import {HeaderButtonsBlock} from "../../../features/HeaderButtonsBlock/index.ts";


export const Header = () => {
  return (
    <header className="w-full h-[25%] md:h-[20%] border-r border-b  border-solid border-gray-500">
      <div className="h-1/5 border-b  border-solid border-gray-500">create</div>
      <HeaderFinder />
      <HeaderButtonsBlock />
    </header>
  );
};
