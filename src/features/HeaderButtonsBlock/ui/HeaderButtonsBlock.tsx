import { Button } from "@/shared/ui/Button/Button";

// Пока в Features, хз во что они вытекут пока что
export function HeaderButtonsBlock() {
  return (
    <div className="h-2/5 overflow-x-auto flex items-center justify-start gap-5 [&>button:first-child]:ml-5 [&>button:last-child]:mr-5">
      <Button className="min-w-[80px] max-w-[80px] p-1">
        <span className="truncate">Aaaaa</span>
      </Button>
      <Button className="min-w-[80px] max-w-[80px] p-1">
        <span className="truncate">Aaaaa</span>
      </Button>
      <Button className="min-w-[80px] max-w-[80px] p-1">
        <span className="truncate">Aaaaaaaaaaaaaaaaa</span>
      </Button>
    </div>
  );
}
