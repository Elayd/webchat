import { Avatar as AvatarLib, AvatarImage } from "@/common/ui/Avatar/Avatar";

interface AvatarProps {
  picture: string;
  width: number;
  height: number;
}
export function Avatar(props: AvatarProps) {
  const { picture, width, height } = props;

  return (
    <AvatarLib className={"w-24 h-24"}>
      <AvatarImage src={picture} alt="avatar" />
    </AvatarLib>
  );
}
