import { Avatar as AvatarLib, AvatarImage } from "@/common/ui/Avatar/Avatar";
import { cn } from "@/common/utils/cn";

interface AvatarProps {
  picture: string;
  className?: string;
}
export function Avatar(props: AvatarProps) {
  const { picture, className } = props;

  return (
    <AvatarLib className={cn(className)}>
      <AvatarImage src={picture} alt="avatar" />
    </AvatarLib>
  );
}
