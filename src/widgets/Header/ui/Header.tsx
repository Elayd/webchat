import { HeaderButtonsBlock } from "@/features/HeaderButtonsBlock";
import { HeaderFinder } from "@/features/HeaderFinder";

export const Header = () => {
  return (
    <header className="w-full h-[20%] border-r border-b  border-solid border-gray-500">
      <div className="h-1/4 border-b  border-solid border-gray-500">create</div>
      <HeaderFinder />
      <HeaderButtonsBlock />
    </header>
  );
};
